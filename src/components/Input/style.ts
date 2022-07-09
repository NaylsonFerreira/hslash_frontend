import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 5px;
    > input {
        padding: 0.5rem;
        background-clip: padding-box;
        border: 1px solid #d8d6de;
    }
    > label {
        padding: 0.5rem;
        min-width: 100px;
        text-align: center;
    }
`