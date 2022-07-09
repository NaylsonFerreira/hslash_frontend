import styled from 'styled-components'
import { List } from '@mui/material';

export const ListMain = styled(List)`         
    padding: 0px;
    margin: 0px;
    li{        
        display: flex;
        padding: 0px;
        div{            
            width: auto;
            height: auto;            
            :nth-child(2){
                padding: 5px 10px;
            }
        }                
        img{
            width: 50px;
        }
    }    
`;

export const ItemBox = styled.div`
    :hover{
        background-color: #f5f5f5;        
        cursor: pointer;
    }
`