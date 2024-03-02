const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
    html {
        --white: #fff;
        --black: #000;
        --orange: #edaa52;
        --red: #e94f37;
        --light-gray: #f6f7eb;
        --gray: #d9d9d9;
        --dark-gray: #363535;
        --green: #34da31;
        --cream: #f8ecec;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }
`;

export default GlobalStyles;