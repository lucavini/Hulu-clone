import GlobalStyles, { Container } from '../styles/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyles />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
