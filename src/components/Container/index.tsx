import { ReactNode } from "react";
import { Main } from "./style";

type Props = {
    children: ReactNode;
}

export const Container = ({ children }: Props) => {
    return (
        <Main>
            {children}
        </Main>
    )
};  