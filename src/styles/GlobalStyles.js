import { createGlobalStyle } from 'styled-components'


export const CSSReset = createGlobalStyle`
  body {
    padding-top: 64px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.bg.primary};
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  

  textarea {
    font-family: inherit;
  }

  @keyframes gradient { 
    0%{background-position:0 0}
    100%{background-position:100% 0}
  }
`;