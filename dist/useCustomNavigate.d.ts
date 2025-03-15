import { NavigateOptions } from 'react-router-dom';
import { IFullRoute, primitiveType } from "./router";
export declare function useCustomNavigate(): {
    navigate: (rout: IFullRoute, values?: {
        [key: string]: primitiveType;
    }, options?: NavigateOptions) => void | Promise<void>;
};
