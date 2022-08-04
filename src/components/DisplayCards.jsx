import { useStore } from "../useStore";
import styled from "styled-components";

const Card = styled.article`
  padding: 1rem;
  border-radius: 0.5rem;
  background: #888888;
  margin: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;

const Question = styled.p`
  color: blue;
`;

const BigButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: yellow;
  color: black;
  border: none; // remove default border
  &:hover {
    // mouse over effect
    background: #cccccc;
  }
`;

export default function DisplayCards() {
  const quizCards = useStore((state) => state.quizCards);
  const toggleBookmark = useStore((state) => state.toggleBookmark);
  const toggleAnswer = useStore((state) => state.toggleAnswer);

  return (
    <div className="App">
      {quizCards.map((card) => (
        <Card key={card.id}>
          <Question>{card.question}</Question>
          <BigButton
            type="button"
            onClick={() => {
              toggleAnswer(card.id);
            }}
          >
            Show Answer
          </BigButton>
          {card.showAnswer && <p>{card.answer}</p>}
        </Card>
      ))}
    </div>
  );
}
