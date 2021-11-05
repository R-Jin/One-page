import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --bg-color: #282C34;
    --white: #fff;
    --lightGray: #dadbdb;
    --darkGray: #ABB2BF;
    --red: #E06C75;
    --green: #98C379;
    --yellow: #E5C07B;
    --blue: #61AFEF;
    --purple: #C678DD;

    --fontVeryBig: 3.125rem; 
    --fontBig: 1.625rem;
    --fontMed: 1.1rem;
    --fontSmall: 0.9rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Fira sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }

`;

export default GlobalStyle;
