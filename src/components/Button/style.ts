import styled from 'styled-components'


export const Main = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 8px;
    margin: 0px;
    border: none;
    font-size: 1em;
    border-radius: 5px;
    &:hover {
        opacity: ${props => props.disabled ? 1 : 0.8};
    }
    
`;