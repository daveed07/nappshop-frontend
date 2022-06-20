import { createGlobalStyle } from "styled-components";
import colors from "@constants/colors";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Ubuntu', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${colors.main};
  }
`;

export default GlobalStyle;