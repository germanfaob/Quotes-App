import { useState } from "react";
import { styled } from "styled-components";
import { quotes } from "../data/quoteData";
import { QuoteCard } from "./QuoteCard";
import { QuoteInterface } from "../interfaces/quoteInterface";

interface ContainerQuoteProps {
  theme: {
    colors: {
      bgQuote: string;
      accentColor: string;
      textColor: string;
    };
  };
}

export const Quote: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [filteredQuotes, setFilteredQuotes] = useState<QuoteInterface[]>([]);

  const handleCategoryChange = (selectedCategory: string) => {
    const filtered = quotes.filter(
      (quote) => quote.category === selectedCategory
    );
    setFilterCategory(selectedCategory);
    setFilteredQuotes(filtered);
  };

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setFilteredQuotes([randomQuote]);
    setFilterCategory("");
  };

  return (
    <Container>
      <div>
        <button onClick={() => handleCategoryChange("Filosofia")}>
          Filosofía
        </button>
        <button onClick={() => handleCategoryChange("Historia")}>
          Historia
        </button>
        <button onClick={() => handleCategoryChange("Politica")}>
          Política
        </button>
        <button onClick={() => handleCategoryChange("Ciencia")}>Ciencia</button>
        <button onClick={handleRandomQuote}>Aleatorio</button>
      </div>
      <div>
        <h2>Categoría seleccionada: {filterCategory}</h2>
      </div>
      <div>
        {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote.quote} author={quote.author} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div<ContainerQuoteProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    width: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.bgQuote};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(18px);
    padding: 10px 15px;
    gap: 0.5rem;

    & button {
      padding: 8px 18px;
      border-radius: 5px;
      color: ${(props) => props.theme.colors.textColor};
      background-color: ${(props) => props.theme.colors.accentColor};
      cursor: pointer;

      &:hover {
        transition: 0.2s;
        background-color: #000;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.bgQuote};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(18px);
    padding: 10px;

    & > h2 {
      font-size: clamp(0.75rem, 3vw, 1.2rem);
      color: ${(props) => props.theme.colors.textColor};
    }
  }

  & > div:nth-child(3) {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.bgQuote};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(18px);
  }
`;
