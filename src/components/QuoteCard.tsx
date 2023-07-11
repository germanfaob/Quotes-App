import { styled } from "styled-components";

interface QuoteCardProps {
  quote: string;
  author: string;
}

export const QuoteCard = (props: QuoteCardProps) => {
  const { quote, author } = props;

  return (
    <ContainerCard>
      <h2>{quote}</h2>
      <p>{author}</p>
    </ContainerCard>
  );
};

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & h2 {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    color: #ffff26;
    font-style: italic;
  }

  & p {
    font-size: clamp(0.6rem, 2vw, 1rem);
    color: #ffff26;
  }
`;
