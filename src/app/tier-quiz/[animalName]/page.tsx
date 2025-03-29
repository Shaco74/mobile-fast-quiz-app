'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { animals } from '@/data/animal-quiz';
import GenericQuizApp from '@/components/GenericQuizApp';

// Hilfsfunktion zur Normalisierung der Tier-Namen für URLs
function normalizeForUrl(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]/g, '-');
}

export default function AnimalQuizPage() {
  const params = useParams();
  const router = useRouter();
  const animalName = params.animalName as string;
  
  // Finde das ausgewählte Tier - vergleiche normalisierte Namen
  const animal = animals.find(a => normalizeForUrl(a.name) === animalName);
  
  // Wenn das Tier nicht gefunden wurde, zeige eine Fehlermeldung
  if (!animal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Tier nicht gefunden</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">Leider konnten wir keine Informationen zu diesem Tier finden.</p>
        <Link 
          href="/tier-quiz"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Zurück zur Tier-Auswahl
        </Link>
      </div>
    );
  }
  
  // Wenn das Quiz abgeschlossen ist, kehre zur Tier-Auswahl zurück
  const handleFinish = (score: number) => {
    // Speichere den Score im sessionStorage
    const storageKey = `animalQuiz_${normalizeForUrl(animal.name)}`;
    console.log(score);
    const quizState = {
      currentScreen: 'end',
      score: score,
      completed: true
    };
    sessionStorage.setItem(storageKey, JSON.stringify(quizState));
    
    // Löse ein storage-Event aus, damit die Übersichtsseite aktualisiert wird
    window.dispatchEvent(new Event('storage'));
    
  };
  
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-foreground">{animal.name}-Quiz</h1>
          <p className="text-gray-600 dark:text-gray-300">{animal.description}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
          <GenericQuizApp 
            questions={animal.questions} 
            onFinish={handleFinish}
            storageKey={`animalQuiz_${normalizeForUrl(animal.name)}`}
          />
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/tier-quiz"
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Zurück zur Tier-Auswahl
          </Link>
        </div>
      </div>
    </div>
  );
}
