'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Home() {
  const [totalScore, setTotalScore] = useState(0);

  const resetProgress = () => {
    // Reset cookies
    document.cookie = "animalProgress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "totalScore=0; path=/;";
    setTotalScore(0);
    alert('Fortschritt wurde zurückgesetzt!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Wissens-Quiz
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Teste dein Wissen und fordere dich selbst heraus!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tier-quiz"
              className="inline-block bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Tier-Quiz
            </Link>
          </div>
        </div>

        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Vielfältige Fragen</h2>
            <p className="text-gray-600 dark:text-gray-300">Spannende Fragen aus verschiedenen Wissensgebieten.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Punktesystem</h2>
            <p className="text-gray-600 dark:text-gray-300">Sammle Punkte für jede korrekte Antwort.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Mobilfreundlich</h2>
            <p className="text-gray-600 dark:text-gray-300">Spiele unterwegs auf jedem Gerät.</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-blue-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Bereit für die Herausforderung?</h2>
          <p className="mb-6">Wähle einen der Spiel-Modi und verbessere deine Punktzahl mit jedem Spiel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tier-quiz"
              className="inline-block bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Tiere entdecken
            </Link>
          </div>
        </div>
            {/* Reset Button */}
        <div className="text-center pt-8">
          <button onClick={resetProgress} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Fortschritt zurücksetzen
          </button>
        </div>
        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wissens-Quiz. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </div>
  );
}
