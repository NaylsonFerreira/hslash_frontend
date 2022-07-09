import styled from 'styled-components';

export const Main = styled.div`
    background-color: #f5f5f5;
    text-align: center;
    margin: 10px;
    border: none;
    table {        
        tr{
            :nth-child(odd) {
                background-color: #ffffff; 
            }
            :nth-child(even) {
                background-color: #f8f8f8; 
            }
        }
        thead tr th {
            background-color: #f8f8f8;            
        }
        td, th {
            padding: 5px;
            border: 1px solid #e5e5e5
        }
    }
`