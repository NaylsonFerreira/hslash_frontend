import { ReactNode } from "react";
import { Container } from "../Container";
import { Main } from "./style";

type DataProps = {
    [key: string]: string | number;
}

type Props = {
    headers: string[];
    data: DataProps[];
    children?: ReactNode;
    action?: {
        onclick?: (id: string) => void
        update?: (id: string) => void;
        delete?: (id: string) => void;
        details?: (id: string) => void;
    }
};

export const Table = ({ children, headers, data, ...props }: Props) => {
    return (
        <Container>
            <Main>
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => <td key={index}>{header}</td>)}
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) =>
                            <tr key={index} onClick={() => props.action?.onclick?.(`${row.id}`)}>
                                {headers.map((header, index) => <td key={index}>{row[header]}</td>)}
                                <td>
                                    {props.action?.details && <button onClick={() => { props.action?.details?.(`${row.id}`) }}>Detalhes</button>}
                                    {props.action?.update && <button onClick={() => { props.action?.update?.(`${row.id}`) }}>Editar</button>}
                                    {props.action?.delete && <button onClick={() => { props.action?.delete?.(`${row.id}`) }}>Excluir</button>}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {children}
            </Main>
        </Container>
    );
}