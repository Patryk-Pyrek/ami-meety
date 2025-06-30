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

type GameState = 'questions' | 'main-category' | 'activities' | 'sub-activities' | 'result' | 'food-drink';

const Index: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('questions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [shuffledCategories, setShuffledCategories] = useState<typeof mainCategories>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [selectedActivityText, setSelectedActivityText] = useState<string>('');
  const [subOptions, setSubOptions] = useState<string[]>([]);
  const [selectedSubOption, setSelectedSubOption] = useState<string>('');

  // Shuffle categories only when entering main-category
  useEffect(() => {
    if (gameState === 'main-category') {
      const shuffled = [...mainCategories].sort(() => Math.random() - 0.5);
      setShuffledCategories(shuffled);
      setRevealedCards(new Set());
    }
  }, [gameState]);

  const handleAnswer = (answerId: string) => {
    const current = initialQuestions[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [current.id]: answerId }));

    if (currentQuestionIndex < initialQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('main-category');
    }
  };

  const getCurrentActivities = () => {
    const timeKey = answers.time as keyof typeof homeActivities;
    const activities = selectedCategory === 'home' ? homeActivities : outsideActivities;
    return activities[timeKey]() || activities.short();
  };

  const handleActivitySelection = (activityId: string) => {
    let options: string[] = [];
    switch (activityId) {
      case 'netflix':
      case 'movies':
      case 'series':
        options = netflixOptions;
        break;
      case 'youtube':
      case 'tiktok':
      case 'music':
        options = musicOptions;
        break;
      case 'cooking':
      case 'baking':
      case 'pizza-making':
        options = cookingOptions;
        break;
      case 'board-games':
      case 'card-games':
      case 'video-games':
        options = gameOptions;
        break;
      default:
        options = [];
    }

    if (options.length > 0) {
      setSubOptions(options);
      setRevealedCards(new Set());
      setGameState('sub-activities');
    } else {
      setSubOptions([]);
      setGameState('result');
    }
  };

  const handleCardReveal = (index: number, cardId?: string, cardText?: string) => {
    if (revealedCards.has(index)) return;
    setRevealedCards(prev => new Set(prev).add(index));

    setTimeout(() => {
      if (gameState === 'main-category') {
        setSelectedCategory(cardId || '');
        // reset next-phase states
        setSelectedActivity('');
        setSelectedActivityText('');
        setSubOptions([]);
        setSelectedSubOption('');
        setGameState('activities');
      } else if (gameState === 'activities') {
        setSelectedActivity(cardId || '');
        setSelectedActivityText(cardText || '');
        handleActivitySelection(cardId || '');
      } else if (gameState === 'sub-activities') {
        setSelectedSubOption(cardText || '');
        setGameState('result');
      }
    }, 1500);
  };

  const resetGame = () => {
    setGameState('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setRevealedCards(new Set());
    setSelectedCategory('');
    setSelectedActivity('');
    setSelectedActivityText('');
    setSubOptions([]);
    setSelectedSubOption('');
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
              {shuffledCategories.map((cat, idx) => (
                <ActivityCard
                  key={cat.id}
                  title={`${cat.emoji} ${cat.text}`}
                  isRevealed={revealedCards.has(idx)}
                  onClick={() => handleCardReveal(idx, cat.id, `${cat.emoji} ${cat.text}`)}
                />
              ))}
            </div>
          </div>
        )}

        {gameState === 'activities' && (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold holographic">Wybierz aktywność!</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {getCurrentActivities().map((act, idx) => (
                <ActivityCard
                  key={act.id}
                  title={`${act.emoji} ${act.text}`}
                  isRevealed={revealedCards.has(idx)}
                  onClick={() => handleCardReveal(idx, act.id, `${act.emoji} ${act.text}`)}
                />
              ))}
            </div>
          </div>
        )}

        {gameState === 'sub-activities' && (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold holographic">Wybierz szczegóły!</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {subOptions.map((opt, idx) => (
                <ActivityCard
                  key={opt}
                  title={opt}
                  isRevealed={revealedCards.has(idx)}
                  onClick={() => handleCardReveal(idx, opt, opt)}
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
