import {ReactElement, ReactNode, useState} from "react";

export interface routerProps {
    children:ReactNode
}

export const Router = ({children}:routerProps) =>{
    const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
    window.onpopstate = () => {
        setCurrentPath(window.location.pathname);
    }
    return children?.find((r:any)=>r.props.path === currentPath).props.component;
}
export interface RouteProps {
    path:string;
    component:ReactElement;
}

export const Route = ({path, component}:RouteProps) =>{
    return component
}

export const useRouter = () =>{
    return{
        push: (path:string)=>{
            history.pushState(path, "", path);
        }
    }
}