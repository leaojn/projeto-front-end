import { Heading } from '../../components/Heading';
import * as Styled from './styles';
import { FirstPage } from '../../components/HomePage';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <HomePage></FirstPage>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
