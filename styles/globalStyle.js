import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #E0E0E0;
        font-family: 'Sora', sans-serif;
    }

    body{
        background: #06202a;
    }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
`;