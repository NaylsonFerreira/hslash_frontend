import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
  }

  a {
    text-decoration: none;
  }

  .center {
    text-align: center;
  }

  .fluid {
    width: 100%;
  }

  .p {
    padding: 10px 0;
  }

  .right-aligned {
    text-align: right;
  }

  .left-aligned {
    text-align: left;
  }

  .clickable {
    cursor: pointer !important;
  }

  .primary {
    color: white;
  }

  .button {    
    padding: 10px !important;    
  }
`

export default GlobalStyle
