import * as Styled from './styles';

export const Cards = () => {
  return (
    <Styled.Container>
      <Styled.Div>
        <Styled.Card>
          <Styled.Image
            src="assets/images/hb20.png"
            alt="Eiffel Tower"
          ></Styled.Image>
          <h3>Vistoria de Transferência</h3>
          <p>
            O veículo possui itens de identificação que os torna único. Por isso
            é fundamental ter uma especialista para verificar e evitar que
            compre um carro com possível fraudes, como clonagem.
          </p>
        </Styled.Card>
      </Styled.Div>

      <Styled.Card>
        <Styled.Image
          src="assets/images/car_loupe.svg"
          alt="Eiffel Tower"
        ></Styled.Image>
        <h3>Vistoria Cautelar</h3>
        <p>
          O veículo possui itens de identificação que os torna único. Por isso é
          fundamental ter uma especialista para verificar e evitar que compre um
          carro com possível fraudes, como clonagem.
        </p>
      </Styled.Card>
    </Styled.Container>
  );
};
