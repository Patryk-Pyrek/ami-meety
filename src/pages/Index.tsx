import React, { useState, useEffect } from 'react';
import QuestionStep from '../components/QuestionStep';
import ActivityCard from '../components/ActivityCard';
import FortuneWheel from '../components/FortuneWheel';
import DrinkBottle from '../components/DrinkBottle';
import {
  initialQuestions,
  mainCategories,
  homeActivities,
  outsideActivities,
  netflixOptions,
  musicOptions,
  cookingOptions,
  gameOptions,
} from '../data/activities';

type GameState = 'questions' | 'main-category' | 'activities' | 'sub-activities' | 'result';

const Index: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('questions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [shuffledCategories, setShuffledCategories] = useState<typeof mainCategories>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedActivityText, setSelectedActivityText] = useState<string>('');
  const [subOptions, setSubOptions] = useState<string[]>([]);
  const [selectedSubOption, setSelectedSubOption] = useState<string>('');

  // On entering each phase, clear revealed cards
  useEffect(() => {
    if (['main-category', 'activities', 'sub-activities'].includes(gameState)) {
      setRevealedCards(new Set());
    }
  }, [gameState]);

  // When entering main-category, shuffle
  useEffect(() => {
    if (gameState === 'main-category') {
      setShuffledCategories([...mainCategories].sort(() => Math.random() - 0.5));
    }
  }, [gameState]);

  const handleAnswer = (answerId: string) => {
    const current = initialQuestions[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [current.id]: answerId }));

    if (currentQuestionIndex < initialQuestions.length - 1) {
      setCurrentQuestionIndex(idx => idx + 1);
    } else {
      setGameState('main-category');
    }
  };

  const getCurrentActivities = () => {
    const timeKey = answers.time as keyof typeof homeActivities;
    const activitiesMap = selectedCategory === 'home' ? homeActivities : outsideActivities;
    return (activitiesMap[timeKey]?.() ?? activitiesMap.short());
  };

  const mapSubOptions = (activityId: string) => {
    switch (activityId) {
      case 'netflix': case 'movies': case 'series':
        return netflixOptions;
      case 'youtube': case 'tiktok': case 'music':
        return musicOptions;
      case 'cooking': case 'baking': case 'pizza-making':
        return cookingOptions;
      case 'board-games': case 'card-games': case 'video-games':
        return gameOptions;
      default:
        return [];
    }
  };

  const handleCardReveal = (idx: number, id: string, text: string) => {
    if (revealedCards.has(idx)) return;
    setRevealedCards(prev => new Set(prev).add(idx));

    setTimeout(() => {
      if (gameState === 'main-category') {
        setSelectedCategory(id);
        setGameState('activities');
      } else if (gameState === 'activities') {
        setSelectedActivityText(text);
        const options = mapSubOptions(id);
        if (options.length) {
          setSubOptions(options);
          setGameState('sub-activities');
        } else {
          setGameState('result');
        }
      } else if (gameState === 'sub-activities') {
        setSelectedSubOption(text);
        setGameState('result');
      }
    }, 500);
  };

  const resetGame = () => {
    setGameState('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedCategory('');
    setSelectedActivityText('');
    setSubOptions([]);
    setSelectedSubOption('');
    setRevealedCards(new Set());
  };

  return (
    <div className="min-h-screen y2k-bg flex flex-col items-center justify-center p-4 font-quicksand">
      <div className="max-w-6xl w-full">
        {gameState === 'questions' && (
          <QuestionStep
            question={initialQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}

        {gameState === 'main-category' && (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold holographic">Gdzie chcecie spędzić czas?</h2>
            <div className="flex justify-center space-x-8">
              {shuffledCategories.map((cat, i) => (
                <ActivityCard
                  key={cat.id}
                  title={`${cat.emoji} ${cat.text}`}
                  isRevealed={revealedCards.has(i)}
                  onClick={() => handleCardReveal(i, cat.id, `${cat.emoji} ${cat.text}`)}
                />
              ))}
            </div>
          </div>
        )}

        {gameState === 'activities' && (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold holographic">Wybierz aktywność!</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {getCurrentActivities().map((act, i) => (
                <ActivityCard
                  key={act.id}
                  title={`${act.emoji} ${act.text}`}
                  isRevealed={revealedCards.has(i)}
                  onClick={() => handleCardReveal(i, act.id, `${act.emoji} ${act.text}`)}
                />
              ))}
            </div>
          </div>
        )}

        {gameState === 'sub-activities' && (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold holographic">Wybierz szczegóły!</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {subOptions.map((opt, i) => (
                <ActivityCard
                  key={opt}
                  title={opt}
                  isRevealed={revealedCards.has(i)}
                  onClick={() => handleCardReveal(i, opt, opt)}
                />
              ))}
            </div>
          </div>
        )}

        {gameState === 'result' && (
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold holographic">Świetny wybór! 🎉</h2>
            <div className="bg-gradient-to-r from-pink-300 to-rose-400 text-white p-8 rounded-xl neon-glow">
              <p className="text-2xl mb-4">
                Wasz plan na {answers.mood === 'romantic' ? 'romantyczny' : 'wspaniały'} czas:
              </p>
              <p className="text-xl">
                {selectedCategory === 'home' ? '🏠 W domu' : '🌳 Na zewnątrz'} • {selectedActivityText}
                {selectedSubOption && ` • ${selectedSubOption}`}
              </p>
            </div>
            <button onClick={resetGame} className="cyber-button px-8 py-4 rounded-lg text-white font-bold text-xl hover:scale-105 transition-all">
              Zagraj ponownie! 🎮
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
