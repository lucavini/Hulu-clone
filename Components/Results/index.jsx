import Thumbnail from '../Thumbnail';
import { Container } from './styles';

function Results({ results }) {
  return (
    <Container>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result}/>
      ))}
    </Container>
  );
}

export default Results;
