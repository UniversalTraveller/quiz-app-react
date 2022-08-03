import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
  quizCards: [
    {
      id: nanoid(),
      question: "What is the capital of France?",
      answer: "Paris",
      tags: ["France", "Capital"],
      bookmark: false,
    },
    {
      id: nanoid(),
      question: "What is the capital of Germany?",
      answer: "Berlin",
      tags: ["Germany", "Capital"],
      bookmark: true,
    },
    {
      id: nanoid(),
      question: "What is the capital of Austria?",
      answer: "Vienna",
      tags: ["Austria", "Capital"],
      bookmark: false,
    },
    {
      id: nanoid(),
      question: "Who wrote 'Neuromancer'?",
      answer: "William Gibson",
      tags: ["Neuromancer", "Author"],
      bookmark: true,
    },
    {
      id: nanoid(),
      question: "Who wrote 'Snow Crash'?",
      answer: "Neal Stephenson",
      tags: ["Snow Crash", "Author"],
      bookmark: false,
    },
    {
      id: nanoid(),
      question: "Who wrote 'The Hitchhiker's Guide to the Galaxy'?",
      answer: "Douglas Adams",
      tags: ["Hitchhiker's Guide", "Author"],
      bookmark: true,
    },
  ],
  toggleBookmark: (id) => {
    set((state) => {
      return {
        quizCards: state.quizCards.map((card) =>
          card.id === id ? { ...card, bookmark: !card.bookmark } : card
        ),
      };
    });
  },
}));

export { useStore };
