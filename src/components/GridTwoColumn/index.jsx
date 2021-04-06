import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { NavLinks } from '../NavLinks';
import { links } from '../NavLinks/mock';

export const GridTwoColumn = ({
  children,
  title,
  text,
  srcImg,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        {/* <NavLinks links={links} /> */}
        <Styled.TextContainer>
          <Heading>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        {/* <SectionBackground background={true}> */}
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
        {/* </SectionBackground> */}
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
