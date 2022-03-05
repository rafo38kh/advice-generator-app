import { createGlobalStyle } from "styled-components";
import colors from "./styleVariables";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

img,
picture {
  max-width: 100%;
  display: block;
}

html {
  font-size: 62.5%;
}


  body {
      font-size: 1.6rem;
      background-color: ${colors.primary};
      font-weight: 800;
      font-family: 'Manrope', sans-serif;
  }
`;

export default GlobalStyle;
