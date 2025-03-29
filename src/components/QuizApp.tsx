'use client';

import { questions } from '@/data/questions';
import GenericQuizApp from './GenericQuizApp';

export default function QuizApp() {
  return (
    <GenericQuizApp 
      questions={questions} 
      storageKey="quizState"
    />
  );
}
