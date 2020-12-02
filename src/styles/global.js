import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        background: #0f0249;
        color: #ddd;
    }

    background: #0f0249;

    button {
        cursor: pointer;
    }
`;