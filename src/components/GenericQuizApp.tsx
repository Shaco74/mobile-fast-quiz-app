'use client';

import { useState, useEffect } from 'react';

// Generische Interfaces für alle Quiz-Typen
export interface AnswerItem {
  text: string;
  isRight: boolean;
}

export interface QuestionItem {
  question: string;
  answers?: AnswerItem[];
  open?: boolean;
  points: number;
}

interface QuizProps {
  questions: QuestionItem[];
  onFinish?: (score: number) => void;
  storageKey?: string;
}

// Quiz screen states
type QuizScreen = 'start' | 'quiz' | 'end';

// Answer state for tracking in the current question
interface AnswerState {
  text: string;
  isRight: boolean;
  selected: boolean;
  disabled: boolean;
  highlight?: boolean;
}

export default function GenericQuizApp({ questions, onFinish, storageKey = 'quizState' }: QuizProps) {
  const [currentScreen, setCurrentScreen] = useState<QuizScreen>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [answerStates, setAnswerStates] = useState<AnswerState[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const MAX_POINTS_REDUCTION_PER_WRONG_ANSWER = 2;

  // Initialize or reset the quiz
  const startQuiz = () => {
    setCurrentScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttempts(0);
    setAnsweredCorrectly(false);
    setShowNextButton(false);
    setFeedbackMessage('');
    
    // Clear browser storage for a new quiz
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(storageKey);
    }
    
    loadQuestion(0);
  };

  // Load a question and its answer states
  const loadQuestion = (index: number) => {
    if (index >= questions.length) {
      setCurrentScreen('end');
      // save core now and set completed to true
      updateProgress(score);

      // Dispatch storage event
      window.dispatchEvent(new Event('storage'));
      
      if (onFinish) {
        onFinish(score);
      }
      return;
    }

    const question = questions[index];
    setAttempts(0);
    setAnsweredCorrectly(false);
    setShowNextButton(false);
    setFeedbackMessage('');
    
    // Initialize answer states
    if (question.answers) {
      const newAnswerStates = question.answers.map(answer => ({
        text: answer.text,
        isRight: answer.isRight,
        selected: false,
        disabled: false
      }));
      setAnswerStates(newAnswerStates);
    } else {
      // For open questions, no answer states needed
      setAnswerStates([]);
      // For open questions, show next button immediately
      if (question.open) {
        setShowNextButton(true);
      }
    }
  };

  // Ensure the quiz always starts from the first question
  useEffect(() => {
    startQuiz();
  }, []);

  // Handle an answer selection
  const handleAnswerClick = (answerIndex: number) => {
    if (answeredCorrectly) return; // Don't allow more selections if already correct

    const newAnswerStates = [...answerStates];
    const selectedAnswer = newAnswerStates[answerIndex];
    
    // Mark as selected
    selectedAnswer.selected = true;
    setAttempts(attempts + 1);

    if (selectedAnswer.isRight) {
      // Correct answer
      setAnsweredCorrectly(true);
      setFeedbackMessage('Richtig!');
      
      // Calculate points based on attempts
      const pointsEarned = Math.max(
        0, 
        questions[currentQuestionIndex].points - (attempts) * MAX_POINTS_REDUCTION_PER_WRONG_ANSWER
      );
      
      setScore(prevScore => prevScore + pointsEarned);
      
      // Reveal all answers and show next button
      revealSolution(newAnswerStates);
      setShowNextButton(true);
    } else {
      // Incorrect answer
      selectedAnswer.disabled = true;
      setFeedbackMessage('Falsch. Versuch es nochmal!');
      
      // Check if there are any correct answers left to select
      const remainingCorrectAnswers = newAnswerStates.filter(
        ans => ans.isRight && !ans.disabled
      );
      
      if (remainingCorrectAnswers.length === 0) {
        // No more correct answers available, reveal solution
        revealSolution(newAnswerStates);
        setShowNextButton(true);
        setFeedbackMessage('Keine richtigen Antworten mehr übrig.');
      }
    }
    
    setAnswerStates(newAnswerStates);
    saveState();
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    const isLastQuestion = nextIndex >= questions.length;

    // For open questions, award full points
    if (questions[currentQuestionIndex].open) {
      const pointsToAdd = questions[currentQuestionIndex].points;
      
      // Update score
      setScore(prevScore => {
        const newScore = prevScore + pointsToAdd;
        
        // If this is the last question, we need to make sure
        // the final score includes these points before ending
        if (isLastQuestion) {
          setTimeout(() => {
            // End quiz with correct final score
            setCurrentScreen('end');
            updateProgress(newScore);
            window.dispatchEvent(new Event('storage'));
            if (onFinish) onFinish(newScore);
          }, 100);
        }
        
        return newScore;
      });
    }
    
    if (!isLastQuestion) {
      // Only proceed to next question if there is one
      setCurrentQuestionIndex(nextIndex);
      loadQuestion(nextIndex);
    } else if (!questions[currentQuestionIndex].open) {
      // For non-open questions, end quiz normally
      setCurrentQuestionIndex(nextIndex);
      loadQuestion(nextIndex);
    }
    
    saveState();
  };

  // Reveal all correct answers
  const revealSolution = (states: AnswerState[]) => {
    const revealedStates = states.map(state => {
      if (state.isRight) {
        return { ...state, selected: true, highlight: true }; // Highlight correct answers
      }
      return { ...state, disabled: true };
    });
    
    setAnswerStates(revealedStates);
  };

  // Save current state to session storage
  const saveState = () => {
    if (typeof window === 'undefined') return;
    
    const state = {
      currentScreen,
      currentQuestionIndex,
      score,
      attempts,
      answerStates,
      answeredCorrectly,
      showNextButton,
      feedbackMessage
    };
    
    sessionStorage.setItem(storageKey, JSON.stringify(state));
  };

  // Load state from session storage
  const loadState = () => {
    if (typeof window === 'undefined') return;
    
    const savedState = sessionStorage.getItem(storageKey);
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        setCurrentScreen(state.currentScreen);
        setCurrentQuestionIndex(state.currentQuestionIndex);
        setScore(state.score);
        setAttempts(state.attempts);
        setAnswerStates(state.answerStates || []);
        setAnsweredCorrectly(state.answeredCorrectly);
        setShowNextButton(state.showNextButton);
        setFeedbackMessage(state.feedbackMessage);
      } catch (error) {
        console.error('Error loading quiz state:', error);
        startQuiz();
      }
    }
  };

  // Update the onFinish function to save progress and score in cookies
  const updateProgress = (finalScore: number) => {
    const animalName = questions[0]?.question || 'unknown'; // Assuming the first question is unique per animal
    const normalizedAnimalName = animalName.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]/g, '-');

    const existingProgress = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)animalProgress\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '{}');
    existingProgress[normalizedAnimalName] = { completed: true, score: finalScore };
    document.cookie = `animalProgress=${JSON.stringify(existingProgress)}; path=/;`;

    const existingTotalScore = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)totalScore\s*\=\s*([^;]*).*$)|^.*$/, "$1")) || 0;
    document.cookie = `totalScore=${existingTotalScore + finalScore}; path=/;`;
  };

  // Render different screens based on current state
  if (currentScreen === 'start') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Willkommen zum Quiz!</h1>
        <p className="mb-8 text-lg text-foreground">Bereit, dein Wissen zu testen?</p>
        <button 
          onClick={startQuiz}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
        >
          Quiz starten
        </button>
      </div>
    );
  }

  if (currentScreen === 'end') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Quiz beendet!</h1>
        <p className="mb-8 text-2xl text-foreground">
          Deine Gesamtpunktzahl: <span className="font-bold">{score}</span>
        </p>
        <button 
          onClick={startQuiz}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
        >
          Nochmal spielen
        </button>
      </div>
    );
  }

  // Quiz screen
  const currentQuestion = questions[currentQuestionIndex];
  const isOpenQuestion = !!currentQuestion?.open;

  return (
    <div className="flex flex-col min-h-[70vh]">
      <div className="mb-4 flex justify-between text-foreground">
        <span>Frage {currentQuestionIndex + 1} von {questions.length}</span>
        <span>Punkte: {score}</span>
      </div>
      
      <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mb-6 shadow">
        <p className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
          {currentQuestion?.question || 'Lade Frage...'}
        </p>
      </div>
      
      {!isOpenQuestion ? (
        // Multiple-choice question
        <div className="grid grid-cols-1 gap-4 mb-6">
          {answerStates.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={answer.disabled || answeredCorrectly}
              className={`
                py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow text-left w-full font-semibold transition-colors
                ${answer.selected && answer.isRight ? 'bg-green-500 dark:bg-green-600 text-white border-transparent' : ''}
                ${answer.selected && !answer.isRight ? 'bg-red-500 dark:bg-red-600 text-white opacity-80 border-transparent' : ''}
                ${answer.highlight ? 'bg-green-200 dark:bg-green-400 text-gray-800 dark:text-gray-100' : ''}
                ${!answer.selected ? 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100' : ''}
                ${answer.disabled ? 'opacity-60 cursor-not-allowed' : ''}
              `}
            >
              {answer.text}
            </button>
          ))}
        </div>
      ) : (
        // Open question
        <div className="mb-8 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300 italic mb-4">
            Dies ist eine offene Frage. Diskutiere deine Antwort und drücke "Weiter", wenn du fertig bist.
          </p>
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
      )}
      
      <div className="mt-auto text-center">
        <p className={`text-lg font-medium mb-4 h-6 
          ${feedbackMessage.includes('Richtig') ? 'text-green-600' : ''}
          ${feedbackMessage.includes('Falsch') || feedbackMessage.includes('übrig') ? 'text-red-600' : ''}
        `}>
          {feedbackMessage}
        </p>
        
        {showNextButton && (
          <button 
            onClick={handleNextQuestion}
            className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg w-full sm:w-auto transition-colors"
          >
            Nächste Frage
          </button>
        )}
      </div>
    </div>
  );
}
