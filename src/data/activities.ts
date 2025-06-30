
export const initialQuestions = [
  {
    id: 'time',
    question: 'Ile macie czasu?',
    options: [
      { id: 'short', text: 'Godzinkę/dwie', emoji: '⏰' },
      { id: 'medium', text: 'Kilka godzin', emoji: '🕐' },
      { id: 'long', text: 'Cały dzień', emoji: '🌅' }
    ]
  },
  {
    id: 'mood',
    question: 'Na co macie ochotę?',
    options: [
      { id: 'active', text: 'Coś aktywnego', emoji: '🏃‍♀️' },
      { id: 'chill', text: 'Relaks', emoji: '😌' },
      { id: 'creative', text: 'Twórczość', emoji: '🎨' },
      { id: 'romantic', text: 'Romantycznie', emoji: '💕' }
    ]
  }
];

export const mainCategories = [
  { id: 'home', text: 'W domu', emoji: '🏠', gradient: 'bg-gradient-to-br from-pink-400 to-purple-600' },
  { id: 'outside', text: 'Na zewnątrz', emoji: '🌳', gradient: 'bg-gradient-to-br from-green-400 to-blue-600' }
];

export const homeActivities = {
  short: [
    { id: 'netflix', text: 'Netflix & Chill', emoji: '📺', gradient: 'bg-gradient-to-br from-red-400 to-pink-600' },
    { id: 'cooking', text: 'Gotowanie', emoji: '👩‍🍳', gradient: 'bg-gradient-to-br from-orange-400 to-yellow-600' },
    { id: 'games', text: 'Gry', emoji: '🎮', gradient: 'bg-gradient-to-br from-purple-400 to-indigo-600' },
    { id: 'music', text: 'Muzyka', emoji: '🎵', gradient: 'bg-gradient-to-br from-cyan-400 to-teal-600' },
    { id: 'massage', text: 'Masaż', emoji: '💆‍♀️', gradient: 'bg-gradient-to-br from-pink-400 to-rose-600' }
  ],
  medium: [
    { id: 'movie-marathon', text: 'Maraton filmów', emoji: '🍿', gradient: 'bg-gradient-to-br from-red-400 to-pink-600' },
    { id: 'cooking-fancy', text: 'Fancy kolacja', emoji: '🥂', gradient: 'bg-gradient-to-br from-orange-400 to-yellow-600' },
    { id: 'cleaning-party', text: 'Sprzątanie party', emoji: '🧹', gradient: 'bg-gradient-to-br from-blue-400 to-cyan-600' },
    { id: 'spa-day', text: 'Domowe SPA', emoji: '🛁', gradient: 'bg-gradient-to-br from-pink-400 to-purple-600' },
    { id: 'board-games', text: 'Gry planszowe', emoji: '🎲', gradient: 'bg-gradient-to-br from-green-400 to-teal-600' }
  ],
  long: [
    { id: 'home-camping', text: 'Piknik w namiocie', emoji: '⛺', gradient: 'bg-gradient-to-br from-green-400 to-blue-600' },
    { id: 'redecoration', text: 'Metamorfoza pokoju', emoji: '🛋️', gradient: 'bg-gradient-to-br from-purple-400 to-pink-600' },
    { id: 'learning', text: 'Nauka razem', emoji: '📚', gradient: 'bg-gradient-to-br from-blue-400 to-indigo-600' },
    { id: 'art-project', text: 'Projekt artystyczny', emoji: '🎨', gradient: 'bg-gradient-to-br from-yellow-400 to-orange-600' },
    { id: 'cooking-course', text: 'Kurs gotowania', emoji: '👨‍🍳', gradient: 'bg-gradient-to-br from-red-400 to-orange-600' }
  ]
};

export const outsideActivities = {
  short: [
    { id: 'walk', text: 'Spacer', emoji: '🚶‍♀️', gradient: 'bg-gradient-to-br from-green-400 to-teal-600' },
    { id: 'coffee', text: 'Kawa na mieście', emoji: '☕', gradient: 'bg-gradient-to-br from-brown-400 to-orange-600' },
    { id: 'shopping', text: 'Shopping', emoji: '🛍️', gradient: 'bg-gradient-to-br from-pink-400 to-purple-600' },
    { id: 'ice-cream', text: 'Lody', emoji: '🍦', gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600' },
    { id: 'playground', text: 'Plac zabaw', emoji: '🛝', gradient: 'bg-gradient-to-br from-yellow-400 to-green-600' }
  ],
  medium: [
    { id: 'museum', text: 'Muzeum/Galeria', emoji: '🏛️', gradient: 'bg-gradient-to-br from-purple-400 to-indigo-600' },
    { id: 'cinema', text: 'Kino', emoji: '🎬', gradient: 'bg-gradient-to-br from-red-400 to-pink-600' },
    { id: 'restaurant', text: 'Restauracja', emoji: '🍽️', gradient: 'bg-gradient-to-br from-orange-400 to-yellow-600' },
    { id: 'mini-golf', text: 'Mini golf', emoji: '⛳', gradient: 'bg-gradient-to-br from-green-400 to-cyan-600' },
    { id: 'bowling', text: 'Bowling', emoji: '🎳', gradient: 'bg-gradient-to-br from-blue-400 to-purple-600' }
  ],
  long: [
    { id: 'hiking', text: 'Wycieczka górska', emoji: '🥾', gradient: 'bg-gradient-to-br from-green-400 to-blue-600' },
    { id: 'beach', text: 'Plaża/Jezioro', emoji: '🏖️', gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600' },
    { id: 'amusement-park', text: 'Park rozrywki', emoji: '🎢', gradient: 'bg-gradient-to-br from-pink-400 to-purple-600' },
    { id: 'city-tour', text: 'Zwiedzanie miasta', emoji: '🏙️', gradient: 'bg-gradient-to-br from-yellow-400 to-orange-600' },
    { id: 'adventure', text: 'Przygoda na cały dzień', emoji: '🗺️', gradient: 'bg-gradient-to-br from-red-400 to-pink-600' }
  ]
};

export const netflixOptions = [
  'Horror 👻', 'Komedia 😂', 'Romans 💕', 'Akcja 💥', 'Dramat 🎭',
  'Sci-Fi 🚀', 'Thriller 😱', 'Dokumentalne 📹', 'Anime 🍜', 'Serial 📺'
];

export const musicOptions = [
  'Taniec 💃', 'Karaoke 🎤', 'Słuchanie razem 🎧', 'Tworzenie playlisty 📝',
  'Nauka gry na instrumencie 🎸', 'Odkrywanie nowej muzyki 🔍'
];

export const cookingOptions = [
  'Włoskie 🇮🇹', 'Azjatyckie 🥢', 'Meksykańskie 🌮', 'Francuskie 🥖',
  'Desery 🍰', 'Zdrowe jedzenie 🥗', 'Fast food 🍔', 'Eksperymentalne 🧪'
];

export const gameOptions = [
  'Gry kooperacyjne 🤝', 'Gry konkurencyjne ⚔️', 'Puzzle 🧩', 'RPG 🗡️',
  'Gry retro 👾', 'Mobilne 📱', 'VR 🥽', 'Planszowe 🎲'
];
