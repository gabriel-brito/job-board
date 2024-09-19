import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #root {
        width: 100%;
    }

    html, body {
        --bg-color: #f5f4ed;
        --info-color: #3d3d3d;
        --orange: #ee6621;
        --paper: #FFFFFF;
        --text-color: #000000;
        min-height: 100vh;
        width: 100%;
    }

    body {
        background-color: var(--bg-color);
        font-size: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyles;
