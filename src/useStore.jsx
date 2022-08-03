import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
  quizCards: [
    {
      id: nanoid(),
      question: "What is the capital of France?",
      answer: "Paris",
      tags: ["France", "Capital"],
    },
    {
      id: nanoid(),
      question: "What is the capital of Germany?",
      answer: "Berlin",
      tags: ["Germany", "Capital"],
    },
    {
      id: nanoid(),
      question: "What is the capital of Austria?",
      answer: "Vienna",
      tags: ["Austria", "Capital"],
    },
    {
      id: nanoid(),
      question: "Who wrote 'Neuromancer'?",
      answer: "William Gibson",
      tags: ["Neuromancer", "Author"],
    },
    {
      id: nanoid(),
      question: "Who wrote 'Snow Crash'?",
      answer: "Neal Stephenson",
      tags: ["Snow Crash", "Author"],
    },
    {
      id: nanoid(),
      question: "Who wrote 'The Hitchhiker's Guide to the Galaxy'?",
      answer: "Douglas Adams",
      tags: ["Hitchhiker's Guide", "Author"],
    },
  ],
}));

export { useStore };
