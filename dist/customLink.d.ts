import { Link } from 'react-router-dom';
import { IFullRoute, primitiveType } from "./router";
type CustomLinkProps = Omit<React.ComponentProps<typeof Link>, 'to'> & {
    to: IFullRoute | string;
    values?: {
        [key: string]: primitiveType;
    };
};
export declare const CustomLink: React.FC<CustomLinkProps>;
export {};
