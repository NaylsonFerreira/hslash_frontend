import styled from 'styled-components';


export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid #ccc;
    align-items: center;
    justify-content: space-between;
`

export const Categories = styled.div`
    display: flex;
    width: 40%;
    background-color: red;
`

export const Cart = styled.div`
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    div {
        width: 100%;    
    }
`

export const SearchBox = styled.div`
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
`