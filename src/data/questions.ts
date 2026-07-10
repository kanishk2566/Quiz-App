import { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: 1,
    question: "Which company developed TypeScript?",
    options: ["Google", "Microsoft", "Meta", "Apple"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useMemo", "useState", "useRef"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "static", "const"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "Which array method creates a new array by transforming every element?",
    options: ["map()", "filter()", "reduce()", "find()"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "Which TypeScript type can represent multiple possible types?",
    options: ["Tuple", "Union", "Enum", "Interface"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Which Next.js directory contains App Router pages?",
    options: ["pages/", "src/", "routes/", "app/"],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Which TypeScript keyword defines the shape of an object?",
    options: ["interface", "class", "enum", "module"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "Which keyword is used to export a function from a module?",
    options: ["public", "default", "export", "module"],
    correctAnswer: 2,
  },
];