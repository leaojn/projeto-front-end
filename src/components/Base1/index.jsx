import * as Styled from './styles';
import P from 'prop-types';
import { Style } from '@styled-icons/material-outlined';

export const Base1 = ({ srcImage, srcLogo, children }) => {
  return (
    <>
      <Styled.Container>
        <Styled.CarDiv>
          <Styled.ImageCar src={srcImage} alt="title"></Styled.ImageCar>
        </Styled.CarDiv>
        <Styled.LogoWhatsApp>
          <Styled.Logo src={srcLogo}></Styled.Logo>
          <Styled.Text>
            Conheça a melhor forma de comprar o seu carro
          </Styled.Text>
          <Styled.Button>WhatsApp</Styled.Button>
        </Styled.LogoWhatsApp>
        <Styled.Grid3>
          <Styled.Text>
            A NET VISTORIA é uma empresa que lhe ajuda a comprar um carro
          </Styled.Text>
          <Styled.Button>Vamos Conversar</Styled.Button>
          <Styled.ImageCar
            src="assets/images/strada.svg"
            alt="title"
          ></Styled.ImageCar>
        </Styled.Grid3>
        <Styled.Grid4>
          <Styled.Text>
            A cada 4 veículos 1 apresenta algum tipo de restrição. Fuja do
            risco. Conte com a NET VISTORIAS
          </Styled.Text>
          <Styled.Button>Você Sabia?</Styled.Button>
        </Styled.Grid4>
      </Styled.Container>
      <Styled.Grid5>
        <Styled.Text>
          <Styled.Span>
            A NET Vistoria já tem mais de X anos no mercado.
          </Styled.Span>
          <Styled.Span></Styled.Span>
          <Styled.Span></Styled.Span>
        </Styled.Text>
        <Styled.DivImageLoupe>
          <Styled.ImageCar
            src="assets/images/car_loupe.svg"
            alt="title"
          ></Styled.ImageCar>
        </Styled.DivImageLoupe>
      </Styled.Grid5>
      <Styled.Grid6>
        <Styled.Visao>
          {/* <Styled.Text>Missão</Styled.Text> */}
          <Styled.Text>Nossos Objetivos</Styled.Text>
          {/* <Styled.Text>Visão</Styled.Text> */}
        </Styled.Visao>
        <Styled.LongText>
          <ul>
            <li>
              {' '}
              MISSÃO: Garantir total segurança para o cliente nas negociações de
              veículos seminovos com atendimento rápido e de excelência.
            </li>
            <li>
              VISÃO: Ser a melhor empresa no ramo de vistoria veicular no Brasil
              e ser referência para os clientes e colaboradores.
            </li>
            <li>
              VALORES: Ser a melhor empresa no ramo de vistoria veicular no
              Brasil e ser referência para os clientes e colaboradores.
            </li>
          </ul>
        </Styled.LongText>
      </Styled.Grid6>
      <Styled.Grid7>
        <Styled.Text>Serviços</Styled.Text>
        <Styled.Card>
          <Styled.CardName>
            <Styled.Text>Vistoria de Transferência</Styled.Text>
          </Styled.CardName>
          <Styled.Text>
            O veículo possui itens de identificação que os torna único. Por isso
            é fundamental ter um especialista para verificar e evitar que compre
            um carro com possíveis fraudes, como clonagem.{' '}
          </Styled.Text>
        </Styled.Card>

        <Styled.Card>
          <Styled.CardName>
            <Styled.Text>Vistoria Cautelar</Styled.Text>
          </Styled.CardName>
          <Styled.Text>
            A estrutura do veículo pode afetar diretamente a segurança dos
            passageiros em uma colisão. Por este motivo é necessário que um
            parceiro verifique se o veículo está seguro. São verificados mais de
            20 itens, como pintura, lataria, teto, assoalho, colunas e
            longarinas.
          </Styled.Text>
        </Styled.Card>
      </Styled.Grid7>
    </>
  );
};

Base1.propTypes = {
  children: P.node.isRequired,
  srcImage: P.string.isRequired,
  srcLogo: P.string.isRequired,
};
