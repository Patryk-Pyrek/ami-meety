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
type TimeChoice = 'short' | 'medium' | 'long';

const Index: React.FC = () => {
  // --- State ---
  const [gameState, setGameState] = useState<GameState>('questions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [shuffledCategories, setShuffledCategories] = useState(mainCategories);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCategoryText, setSelectedCategoryText] = useState<string>('');
  const [selectedActivityText, setSelectedActivityText] = useState<string>('');
  const [subOptions, setSubOptions] = useState<string[]>([]);
  const [selectedSubOption, setSelectedSubOption] = useState<string>('');

  // --- Effects ---
  // Shuffle categories when resetting to questions
  useEffect(() => {
    if (gameState === 'questions') {
      setShuffledCategories([...mainCategories].sort(() => Math.random() - 0.5));
    }
  }, [gameState]);

  // Clear revealed cards on new phase
  useEffect(() => {
    if (['main-category', 'activities', 'sub-activities'].includes(gameState)) {
      setRevealedCards(new Set());
    }
  }, [gameState]);

  // --- Handlers ---
  const handleAnswer = (answerId: string) => {
    const question = initialQuestions[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [question.id]: answerId }));
    if (currentQuestionIndex < initialQuestions.length - 1) {
      setCurrentQuestionIndex(idx => idx + 1);
    } else {
      setGameState('main-category');
    }
  };

  const getCurrentActivities = () => {
    const timeChoice = answers.time as TimeChoice;
    const map = selectedCategory === 'home' ? homeActivities : outsideActivities;
    return (map[timeChoice]?.() ?? map.short());
  };

  const mapSubOptions = (id: string) => {
    if (['netflix', 'movie-marathon'].includes(id)) return netflixOptions;
    if (['music', 'youtube', 'tiktok'].includes(id)) return musicOptions;
    if (['cooking', 'cooking-fancy', 'cooking-course'].includes(id)) return cookingOptions;
    if (['board-games', 'card-games', 'video-games'].includes(id)) return gameOptions;
    return [];
  };

  const handleCardReveal = (idx: number, id?: string, text?: string) => {
    if (revealedCards.has(idx)) return;
    // Flip the clicked card
    setRevealedCards(prev => new Set(prev).add(idx));

    // After reveal animation, advance phase
    setTimeout(() => {
      if (gameState === 'main-category') {
        setSelectedCategory(id || '');
        setSelectedCategoryText(text || '');
        setGameState('activities');
      } else if (gameState === 'activities') {
        setSelectedActivityText(text || '');
        const options = mapSubOptions(id || '');
        if (options.length) {
          setSubOptions(options);
          setGameState('sub-activities');
        } else {
          setGameState('result');
        }
      } else if (gameState === 'sub-activities') {
        setSelectedSubOption(text || '');
        setGameState('result');
      }
    }, 800); // match your CSS flip duration (e.g. 800ms)
  };

  const resetGame = () => {
    setGameState('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedCategory('');
    setSelectedCategoryText('');
    setSelectedActivityText('');
    setSubOptions([]);
    setSelectedSubOption('');
    setRevealedCards(new Set());
  };

  const goToFoodDrink = () => setGameState('food-drink');

  // --- UI ---
  return (
    <div className="min-h-screen y2k-bg flex flex-col items-center justify-center p-4 font-quicksand">
      <div className="max-w-6xl w-full">
        {/* Header & Nav */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold holographic mb-4">💖 Randka z Amelką 💖</h1>
          <p className="text-xl text-gray-700 glass-effect p-4 rounded-lg">✨ Super aktywności z Amelką! ✨</p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <button onClick={resetGame} className="cyber-button px-8 py-4 rounded-lg text-white font-bold hover:scale-105 transition-all">🎯 Nowa gra</button>
          <button onClick={goToFoodDrink} className="cyber-button px-8 py-4 rounded-lg text-white font-bold hover:scale-105 transition-all">🍕🥤 Jedzenie & Napoje</button>
        </div>

        <div className="glass-effect rounded-3xl p-8 min-h-96">
          {/* Questions */}
          {gameState === 'questions' && (
            <QuestionStep question={initialQuestions[currentQuestionIndex]} onAnswer={handleAnswer} />
          )}

          {/* Main Category */}
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

          {/* Activities */}
          {gameState === 'activities' && (
  <div className="text-center space-y-8">
    <h2 className="text-3xl font-bold holographic">Wylosuj aktywność!</h2>
    <div className="flex justify-center">
      <ActivityCard
        title={selectedActivityText || '❓'}
        isRevealed={revealedCards.has(0)}
        onClick={() => {
          if (revealedCards.has(0)) return;
          const pool = getCurrentActivities();
          const choice = pool[Math.floor(Math.random() * pool.length)];
          handleCardReveal(0, undefined, `${choice.emoji} ${choice.text}`);
        }}
      />
    </div>
  </div>
)}
                    onClick={() => handleCardReveal(i, act.id, `${act.emoji} ${act.text}`)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sub-Activities */}
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

          {/* Result */}
          {gameState === 'result' && (
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold holographic">Świetny wybór! 🎉</h2>
              <div className="bg-gradient-to-r from-pink-300 to-rose-400 text-white p-8 rounded-xl neon-glow">
                <p className="text-2xl mb-4">
                  Wasz plan na {answers.mood === 'romantic' ? 'romantyczny' : 'wspaniały'} czas:
                </p>
                <p className="text-xl">
                  {selectedCategoryText} • {selectedActivityText}
                  {selectedSubOption && ` • ${selectedSubOption}`}
                </p>
              </div>
              <button onClick={resetGame} className="cyber-button px-8 py-4 rounded-lg text-white font-bold text-xl hover:scale-105 transition-all">
                Zagraj ponownie! 🎮
              </button>
            </div>
          )}

          {/* Food & Drink */}
          {gameState === 'food-drink' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <FortuneWheel />
                <DrinkBottle />
              </div>
              <div className="text-center">
                <button onClick={resetGame} className="cyber-button px-8 py-4 rounded-lg text-white font-bold text-xl hover:scale-105 transition-all">
                  Powrót do gry 🎯
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
