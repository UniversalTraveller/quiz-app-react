import { useStore } from "../useStore";
export default function DisplayCards() {
  const quizCards = useStore((state) => state.quizCards);

  return (
    <div className="App">
      {quizCards.map((card) => (
        <p key={card.id}>{card.question}</p>
      ))}
    </div>
  );
}
