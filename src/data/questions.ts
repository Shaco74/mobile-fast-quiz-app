export interface Answer {
  text: string;
  isRight: boolean;
}

export interface Question {
  question: string;
  answers?: Answer[];
  open?: boolean;
  points: number;
}

export const questions: Question[] = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      { text: "Berlin", isRight: false },
      { text: "Madrid", isRight: false },
      { text: "Paris", isRight: true },
      { text: "Rom", isRight: false }
    ],
    points: 10 // Punkte für richtige Antwort beim ersten Versuch
  },
  {
    question: "Welche Planeten in unserem Sonnensystem haben Ringe?",
    answers: [
      { text: "Saturn", isRight: true },
      { text: "Jupiter", isRight: true },
      { text: "Uranus", isRight: true },
      { text: "Neptun", isRight: true }
    ],
    points: 15 // Mehr Punkte für eine schwierigere Frage
  },
  {
    question: "Was ist 2 + 2 * 2?",
    answers: [
      { text: "4", isRight: false },
      { text: "6", isRight: true },
      { text: "8", isRight: false },
      { text: "2", isRight: false }
    ],
    points: 8
  },
  {
    question: "Welche dieser Farben sind Primärfarben?",
    answers: [
      { text: "Rot", isRight: true },
      { text: "Grün", isRight: false },
      { text: "Blau", isRight: true },
      { text: "Gelb", isRight: true }
    ],
    points: 12
  }
];
