import { ReactNode } from "react";
import { Main } from "./style";

type Props = {
    children: ReactNode;
};

export const Form = ({ children }: Props) => {
    return (
        <Main>
            {children}
        </Main>
    );
}

export default Form;