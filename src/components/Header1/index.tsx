import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import { Main } from "./style";


type Props = {
    children: ReactNode;
    className?: string;
    background?: string;
    color?: string;
}

export const Header1 = ({ children, ...props }: Props) => {
    const theme = useTheme();
    return (
        <Main
            backgroundColor={theme.palette.primary.main}
            color={theme.palette.primary.contrastText}
            {...props}
        >
            {children}
        </Main>
    )
};  