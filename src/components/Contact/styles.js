import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const ContactDiv = styled.div`
  ${({ theme }) => css`
  display: flex;
    flex-direction: column;
    min-height: 80vh;
    margin-top:45rem;
    background-color: ${theme.colors.secondaryColor};
  > ${Text} {
      color: black;
      align-self: center;
      margin-bottom: 4rem;
      margin-top: 4rem;
      font-size: 2.5rem;
      color: white;
    }
    @media ${theme.media.lteMedium} {
      flex-direction: column;
      margin-top: 90rem;
      justify-content: space-between;
    }
    }
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    color: white;
    padding: 0;
    margin: 0;
    max-width: 19rem;
    font-size: 1.4rem;
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    /* flex-direction: row; */
    padding: 1rem;
    margin: 0.5rem;
    font-size: 20px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #ff6600;
    color: #FFFFFF;
    border-style: solid;
    border-radius: 0px;
    box-shadow: 0px 0px 1px rgba(66,66,66,.75);
    text-shadow: 0px 0px 5px rgba(66,66,66,.75);
    }
    :focus {
     outline:none;
  `}
`;

export const ContactItens = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    > ${ImageCar}{
      margin: 4rem;
      /* background-color: red; */
    }
    @media ${theme.media.lteMedium} {
      flex-direction: column;
      /* justify-content: space-between; */
    }
    }
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    /* padding: 12px 28px; */
    margin-top: 4rem;
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
    background-color: ${theme.colors.secondaryColor};
    border-radius: 5px;
    border: 1px solid #566963;
    display: inline-block;
    cursor: pointer;
    color: ${theme.colors.white};
    font-family: Arial;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.2rem 4.2rem;
    text-decoration: none;
    text-shadow: 0px -1px 0px #2b665e;
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    display: flex;
    >${Button}{
      background-color: white;
      color: black;
      margin-top:1rem;
      border-radius: 0;
      margin: 0.5rem;
    }
    }
  `}
`;

export const ImageCar = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    /* display: none; */
    /* order: 2; */
  `}
`;

export const WhatsAppContact = styled.div`
  ${({ theme }) => css``}
`;
