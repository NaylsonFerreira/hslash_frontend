import styled from "styled-components"

type Props = {
    backgroundColor?: string
    color?: string
}

export const Main = styled.h1<Props>`
    color: ${props => props.color || "#000"};
    background-color: ${props => props.backgroundColor || "#fff"};
`