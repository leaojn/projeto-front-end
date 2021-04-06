import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <Heading>Meu teste de texto</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
