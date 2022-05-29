import { ReactNode } from "react";
import { Main } from "./style";

type Props = {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({ children, className = '', ...props }: Props) => {
    return (
        <Main className={`button ${className}`} {...props}>
            {children}
        </Main>
    )
};  