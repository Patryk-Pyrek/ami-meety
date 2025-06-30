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
  gameOptions
} from '../data/activities';

type GameState = 'questions' | 'main-category' | 'activities' | 'sub-activities' | 'result' | 'food-drink';
type TimeChoice = 'short' | 'medium' | 'long';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('questions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [subOptions, setSubOptions] = useState<string[]>([]);

  const handleAnswer = (answerId: string) => {
    const currentQuestion = initialQuestions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: answerId };
    setAnswers(newAnswers);

    if (currentQuestionIndex < initialQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('main-category');
      setRevealedCards(new Set());
    }
  };

  const handleCardReveal = (index: number, cardId?: string) => {
    if (revealedCards.has(index)) return;

    const newRevealed = new Set(revealedCards);
    newRevealed.add(index);
    setRevealedCards(newRevealed);

    setTimeout(() => {
      if (gameState === 'main-category') {
        setSelectedCategory(cardId || '');
        setGameState('activities');
        setRevealedCards(new Set());
      } else if (gameState === 'activities') {
        setSelectedActivity(cardId || '');
        handleActivitySelection(cardId || '');
      } else if (gameState === 'sub-activities') {
        setGameState('result');
      }
    }, 1500);
  };

  const handleActivitySelection = (activityId: string) => {
    let options: string[] = [];
    
    switch (activityId) {
      case 'netflix':
      case 'movie-marathon':
        options = netflixOptions;
        break;
      case 'music':
        options = musicOptions;
        break;
      case 'cooking':
      case 'cooking-fancy':
      case 'cooking-course':
        options = cookingOptions;
        break;
      case 'games':
      case 'board-games':
        options = gameOptions;
        break;
      default:
        setGameState('result');
        return;
    }

    if (options.length > 0) {
      setSubOptions(options);
      setGameState('sub-activities');
      setRevealedCards(new Set());
    } else {
      setGameState('result');
    }
  };

  const getCurrentActivities = () => {
    const timeChoice = answers.time as TimeChoice;
    const activities = selectedCategory === 'home' ? homeActivities : outsideActivities;
    return activities[timeChoice] || activities.short;
  };

  const resetGame = () => {
    setGameState('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setRevealedCards(new Set());
    setSelectedCategory('');
    setSelectedActivity('');
    setSubOptions([]);
  };

  const goToFoodDrink = () => {
    setGameState('food-drink');
  };

  return (
    <div className="min-h-screen y2k-bg flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold holographic mb-4">
            💖 Randka z Amelką 💖
          </h1>
          <p className="text-xl text-gray-700 glass-effect p-4 rounded-lg">
            Interaktywna strona do wybierania aktywności dla Amelki! ✨
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={resetGame}
            className="cyber-button px-8 py-4 rounded-lg text-white font-bold hover:scale-105 transition-all min-w-[160px]"
          >
            🎯 Nowa gra
          </button>
          <button
            onClick={goToFoodDrink}
            className="cyber-button px-8 py-4 rounded-lg text-white font-bold hover:scale-105 transition-all min-w-[160px]"
          >
            🍕🥤 Jedzenie & Napoje
          </button>
        </div>

        {/* Main Content */}
        <div className="glass-effect rounded-3xl p-8 min-h-96">
          {gameState === 'questions' && (
            <QuestionStep
              question={initialQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          )}

          {gameState === 'main-category' && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold holographic">
                Gdzie chcecie spędzić czas?
              </h2>
              <div className="flex justify-center space-x-8">
                {mainCategories.map((category, index) => (
                  <ActivityCard
                    key={category.id}
                    title={`${category.emoji} ${category.text}`}
                    isRevealed={revealedCards.has(index)}
                    onClick={() => handleCardReveal(index, category.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {gameState === 'activities' && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold holographic">
                Wybierz aktywność!
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {getCurrentActivities().map((activity, index) => (
                  <ActivityCard
                    key={`${activity.id}-${index}`}
                    title={`${activity.emoji} ${activity.text}`}
                    isRevealed={revealedCards.has(index)}
                    onClick={() => handleCardReveal(index, activity.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {gameState === 'sub-activities' && (
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold holographic">
                Wybierz szczegóły!
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {subOptions.map((option, index) => (
                  <ActivityCard
                    key={index}
                    title={option}
                    isRevealed={revealedCards.has(index)}
                    onClick={() => handleCardReveal(index)}
                  />
                ))}
              </div>
            </div>
          )}

          {gameState === 'result' && (
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold holographic">
                Świetny wybór! 🎉
              </h2>
              <div className="bg-gradient-to-r from-pink-300 to-rose-400 text-white p-8 rounded-xl neon-glow">
                <p className="text-2xl mb-4">
                  Wasz plan na {answers.mood === 'romantic' ? 'romantyczny' : 'wspaniały'} czas:
                </p>
                <p className="text-xl">
                  {selectedCategory === 'home' ? '🏠 W domu' : '🌳 Na zewnątrz'} • {selectedActivity}
                </p>
                {subOptions.length > 0 && (
                  <p className="text-lg mt-4 opacity-90">
                    Perfect dla was! Spędzcie razem cudowny czas! 💕
                  </p>
                )}
              </div>
              <button
                onClick={resetGame}
                className="cyber-button px-8 py-4 rounded-lg text-white font-bold text-xl hover:scale-105 transition-all"
              >
                Zagraj ponownie! 🎮
              </button>
            </div>
          )}

          {gameState === 'food-drink' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <FortuneWheel />
                <DrinkBottle />
              </div>
              <div className="text-center">
                <button
                  onClick={resetGame}
                  className="cyber-button px-8 py-4 rounded-lg text-white font-bold text-xl hover:scale-105 transition-all"
                >
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
