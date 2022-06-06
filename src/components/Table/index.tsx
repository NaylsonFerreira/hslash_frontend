import { ReactNode } from "react";
import { Container } from "../Container";
import { Main } from "./style";
import { Table as MTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


type DataProps = {
    [key: string]: string | number;
}

type Props = {
    headers: string[];
    data: DataProps[];
    children?: ReactNode;
    action?: {
        onclick?: () => void;
        update?: () => void;
        delete?: () => void;
        details?: () => void;
    }
};

export const Table = ({ children, headers, data, ...props }: Props) => {
    return (
        <Container>
            <Main>
                <TableContainer component={Paper}>
                    <MTable size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {headers.map((header, index) =>
                                    <TableCell key={index} align="center">{header}</TableCell>
                                )}
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) =>
                                <TableRow
                                    key={index}
                                    onClick={() => props.action?.onclick?.(`${row.id}`)}
                                >
                                    {headers.map((header, index) => <TableCell key={index} align="center">{row[header]}</TableCell>)}
                                    <TableCell>
                                        {props.action?.details && <button onClick={() => { props.action?.details?.(`${row.id}`) }}>Detalhes</button>}
                                        {props.action?.update && <button onClick={() => { props.action?.update?.(`${row.id}`) }}>Editar</button>}
                                        {props.action?.delete && <button onClick={() => { props.action?.delete?.(`${row.id}`) }}>Excluir</button>}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </MTable>
                </TableContainer>
                {children}
            </Main>
        </Container>
    );
}