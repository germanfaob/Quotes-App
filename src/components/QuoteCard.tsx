import { styled } from "styled-components";

interface QuoteTheme {
  theme: {
    colors: {
      textColor: string;
    };
  };
}

interface QuoteCardProps {
  quote: string;
  author: string;
}

export const QuoteCard = (props: QuoteCardProps) => {
  const { quote, author } = props;

  return (
    <ContainerCard>
      <p>{quote}</p>
      <p>{author}</p>
    </ContainerCard>
  );
};

const ContainerCard = styled.div<QuoteTheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > p:first-child {
    font-size: clamp(0.75rem, 3vw, 1.25rem);
    color: ${(props) => props.theme.colors.textColor};
    font-weight: 200;
    font-style: italic;
  }

  & > p:last-child {
    font-size: clamp(0.6rem, 2vw, 0.9rem);
    color: ${(props) => props.theme.colors.textColor};
    font-weight: 200;
  }
`;
