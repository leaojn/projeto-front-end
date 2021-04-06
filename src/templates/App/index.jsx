import { Heading } from '../../components/Heading';
import * as Styled from './styles';
import { FirstPage } from '../../components/FirstPage';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <FirstPage></FirstPage>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
