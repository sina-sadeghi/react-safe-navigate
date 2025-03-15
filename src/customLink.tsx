import { Link, generatePath, LinkProps } from 'react-router-dom';
import {IFullRoute, JSXElement, primitiveType} from './router';

interface ICustomLinkRouteProps extends Omit<LinkProps, 'to'> {
  to: IFullRoute;
  values: Record<string, primitiveType>;
}

interface ICustomLinkStringProps extends Omit<LinkProps, 'to'> {
  to: string;
  values?: never;
}

export type CustomLinkProps = ICustomLinkRouteProps | ICustomLinkStringProps;

/**
 * CustomLink component wraps React Router's Link component to support:
 * - A static string route, or
 * - A dynamic route object (IFullRoute) generated from convertRouter.
 *
 * If the `to` prop is an IFullRoute, it uses generatePath with the provided values
 * to compute the complete route.
 *
 * @param props - CustomLinkProps
 * @returns A JSX.Element rendering the Link component.
 */
export const CustomLink = (props: CustomLinkProps): JSXElement => {
  const { to, values, ...rest } = props;
  if (typeof to === 'string') {
    return <Link to={to} {...rest} />;
  }
  return <Link to={generatePath(to.__fullRoute, values)} {...rest} />;
};
