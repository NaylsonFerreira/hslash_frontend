import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    text-align: center;
    table {
        width: 100%;
        border-collapse: collapse;
        tr{
            :nth-child(odd) {
                background-color: #ffffff; 
            }
            :nth-child(even) {
                background-color: #f8f8f8; 
            }
        }
        thead tr td {
            background-color: #f8f8f8;            
        }
        td {
            padding: 5px;
            border: 1px solid #e5e5e5;
        }
    }
`