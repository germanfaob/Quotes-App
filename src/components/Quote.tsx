import { styled } from "styled-components";

interface ContainerQuoteProps {
  theme: {
    colors: {
      bgQuote: string;
    };
  };
}

export const Quote = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

const Container = styled.div<ContainerQuoteProps>`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:nth-child(1) {
    display: flex;
    width: 35%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    padding: 35px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.bgQuote};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
  }
`;
