import { ReactNode } from "react";
import { Main } from "./style";

type Props = {
    children: ReactNode;
    className?: string;
}

export const Header1 = ({ children, className= '' }: Props) => {
    return (
        <Main className={`${className}`}>
            {children}
        </Main>
    )
};  