/**
 * Primitive types used for dynamic route parameters.
 */
export type primitiveType = string | number | null | undefined;

/**
 * Represents a full route, including the complete path.
 */
export interface IFullRoute {
    __fullRoute: string;
}

/**
 * Represents a JSX element.
 */
interface JSXElement extends React.ReactElement<any, any> {}

/**
 * Defines the structure of route configurations.
 *
 * Each route can either:
 * - Define a `path` with an optional element and children, or
 * - Be an index route (denoted by the `index` flag) with an optional element and children.
 */
export type RouterType = readonly (
    | {
    readonly path: string;
    readonly element?: JSXElement;
    readonly children: readonly any[];
}
    | {
    readonly index: boolean;
    readonly element?: JSXElement;
    readonly children: readonly any[];
}
    )[];

/**
 * Transforms an array of route configurations (RouterType) into a nested object type.
 *
 * This transformation converts the user's array type into a nested object with type suggestions
 * and injects the `__fullRoute` property. The `__fullRoute` represents the complete route path
 * and is used in `useCustomNavigate`.
 *
 * - For index routes, the key is `'/'`.
 * - For routes with a `path`, the key is the string path.
 *
 * @template T - A RouterType array.
 */
export type TransformRoutes<T extends RouterType> = {
    [K in T[number] as
        K extends { index: true }
            ? '/'
            : K extends { path: infer P }
                ? (P extends string ? P : never)
                : never
    ]: K extends { index: true }
        ? Omit<
            Omit<K, 'index' | 'children'> & TransformRoutes<K['children']> & IFullRoute,
            'element'
        >
        : K extends { path: infer P }
            ? Omit<
                P extends string
                    ? Omit<K, 'path' | 'children'> & TransformRoutes<K['children']> & { __fullRoute: string }
                    : never,
                'element'
            >
            : never;
};
