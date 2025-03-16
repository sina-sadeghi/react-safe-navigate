import { useNavigate, NavigateOptions, generatePath } from 'react-router-dom';
import { IFullRoute, primitiveType } from './router';

/**
 * Custom hook for navigation using named routes.
 *
 * @returns {Object} An object containing the `navigate` function.
 */
export function useCustomNavigate() {
    const navigateFn = useNavigate();

    /**
     * Navigates to a given route with optional dynamic parameters and navigation options.
     *
     * @param {IFullRoute} route - The route object containing the full path.
     * @param {Record<string, primitiveType>} [params] - Dynamic parameters for route generation.
     * @param {NavigateOptions} [options] - Additional navigation options.
     */
    return (
        route: IFullRoute,
        params?: Record<string, primitiveType>,
        options?: NavigateOptions
    ) => {
        navigateFn(generatePath(route.__fullRoute, params), options);
    };
}
