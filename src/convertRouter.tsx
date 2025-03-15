import { TransformRoutes } from "./router";

/**
 * Recursively converts an array of route objects into a nested object mapping.
 * 
 * This function takes an array of routes and converts it into a nested object so that
 * route errors can be prevented with JavaScript suggestions. The generated object includes
 * the `__fullRoute` property, which holds the complete route path for use in `useCustomNavigate`.
 *
 * @template T - The type of the array of route objects.
 * @param input - An array of route objects.
 * @param pathFromStart - The base path to prepend to each route (default is an empty string).
 * @returns The transformed routes as a nested object.
 */
export function convertRouter<T extends readonly any[]>(
  input: T,
  pathFromStart: string = ''
): TransformRoutes<T> {
  const result: { [key: string]: any } = {};

  if (input) {
    for (const route of input) {
      // Compute the full route path by appending the current route's path to the base path.
      const fullRoute = `${pathFromStart ?? ''}${
        route?.path ? (route.path.startsWith('/') ? route.path : `/${route.path}`) : ''
      }`;

      // Determine the key for this route in the resulting object.
      // For index routes, use '/' as the key; otherwise, use the route's path.
      const key = route?.index
        ? '/'
        : route.path?.startsWith('/')
        ? route.path
        : `${route.path}`;

      result[key] = {
        ...route,
        // Remove properties that are now computed or will be nested.
        index: undefined,
        path: undefined,
        children: undefined,
        // Recursively convert any children routes.
        ...convertRouter(route.children, fullRoute),
        // Include the complete route for later use.
        __fullRoute: fullRoute,
      };
    }
  }
  return result as TransformRoutes<T>;
}
