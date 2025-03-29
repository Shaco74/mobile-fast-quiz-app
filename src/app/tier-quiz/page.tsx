'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { animals } from '@/data/animal-quiz';

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

export default function TierQuizPage() {
  const [animalProgress, setAnimalProgress] = useState<Record<string, { completed: boolean, score: number }>>({});
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const calculateTotalScore = () => {
      let total = 0;
      const progress: Record<string, { completed: boolean, score: number }> = {};

      animals.forEach(animal => {
        const key = `animalQuiz_${normalizeForUrl(animal.name)}`;
        const savedState = sessionStorage.getItem(key);
        if (savedState) {
          try {
            const state = JSON.parse(savedState);
              progress[normalizeForUrl(animal.name)] = { completed: true, score: state.score };
              total += state.score;
          } catch (error) {
            console.error(`Error parsing state for ${animal.name}:`, error);
          }
        }
      });

      setAnimalProgress(progress);
      setTotalScore(total);
    };

    calculateTotalScore();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      calculateTotalScore();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also poll for changes every 2 seconds
    const interval = setInterval(calculateTotalScore, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

console.log(animalProgress);
console.log(animals);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Tier-Quiz</h1>
          <h2 className="text-2xl font-bold">Gesamtpunktzahl: {totalScore}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Wähle ein Tier aus und beantworte spannende Fragen!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {animals.map((animal, index) => {
            const progress = animalProgress[normalizeForUrl(animal.name)] || { completed: false, score: 0 };
            return (
              <Link
                key={index}
                href={`/tier-quiz/${normalizeForUrl(animal.name)}`}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 flex flex-col h-full ${progress.completed ? 'border-2 border-green-500' : ''}`}
              >
                <div className="h-48 relative bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-7xl">{getAnimalEmoji(animal.name)}</div>
                </div>
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{animal.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{animal.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {progress.completed ? `✅ Abgeschlossen - Punkte: ${progress.score}` : '❌ Noch nicht abgeschlossen'}
                  </p>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {animal.questions.length} Fragen
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-colors"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

// Helfer-Funktion, um Tier-Emojis zurückzugeben als Fallback für fehlende Bilder
function getAnimalEmoji(animalName: string): string {
  const emojiMap: Record<string, string> = {
    'Asiatischer Elefant': '🐘',
    'Humboldt-Pinguin': '🐧',
    'Kalifornischer Seelöwe': '🦭',
    'Kleiner Panda': '🐼',
    'Flusspferd': '🦛',
    'Gepard': '🐆',
    'Orang-Utan': '🦧',
    'Nashorn': '🦏',
    'Zweifingerfaultier': '🦥',
    'Grevyzebra': '🦓',
    'Erdferkel': '🐗',
    'Bonobo': '🐒',
    'Mantelpavian': '🐵',
    'Weißhandgibbon': '🦍',
    'Rotschenkel-Kleideraffe': '🐒',
    'Bartaffe': '🐒',
    'Zwergseidenäffchen': '🐒',
    'Riesenschildkröte': '🐢',
    'Erdmännchen': '🐹',
    'Moschusochse': '🐂',
    'Tiger': '🐅',
    'Afrikanischer Löwe': '🦁',
    'Okapi': '🦓',
    'Alpaka': '🦙',
    'Strauß': '🦢',
    'Krokodil': '🐊',
    'Rotluchs': '🐱',
    'Tapir': '🐖',
    'Katta': '🐒'
  };
  
  return emojiMap[animalName] || '🐾';
}
