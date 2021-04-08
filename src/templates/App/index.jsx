import { Heading } from '../../components/Heading';
import * as Styled from './styles';
import { HomePage } from '../../components/HomePage';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <HomePage></HomePage>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
