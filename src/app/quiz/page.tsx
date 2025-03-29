'use client';

import { useState } from 'react';
import Link from 'next/link';
import { questions } from '@/data/questions';
import GenericQuizApp from '@/components/GenericQuizApp';

export default function QuizPage() {
  const handleFinish = (score: number) => {
    // Optional: Hier könnten Score-bezogene Aktionen stattfinden
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full mx-auto px-4 py-8 bg-white dark:bg-gray-900 sm:shadow-md sm:rounded-lg sm:my-8 transition-colors">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2 text-foreground">Allgemeines Wissensquiz</h1>
          <p className="text-gray-600 dark:text-gray-300">Teste dein Allgemeinwissen</p>
        </div>
        
        <GenericQuizApp 
          questions={questions} 
          onFinish={handleFinish}
          storageKey="generalQuizState"
        />
        
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
