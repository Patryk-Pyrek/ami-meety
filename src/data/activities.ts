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

// Expanded activities database with much more variety
const homeActivitiesShort = [
  { id: 'netflix', text: 'Netflix & Chill', emoji: '📺' },
  { id: 'cooking', text: 'Gotowanie razem', emoji: '👩‍🍳' },
  { id: 'games', text: 'Gry planszowe', emoji: '🎲' },
  { id: 'music', text: 'Słuchanie muzyki', emoji: '🎵' },
  { id: 'reading', text: 'Czytanie książek', emoji: '📚' },
  { id: 'tea-time', text: 'Herbatka z ciasteczkami', emoji: '🍵' },
  { id: 'puzzle', text: 'Układanie puzzli', emoji: '🧩' },
  { id: 'drawing', text: 'Rysowanie razem', emoji: '🎨' },
  { id: 'karaoke', text: 'Karaoke domowe', emoji: '🎤' },
  { id: 'meditation', text: 'Medytacja', emoji: '🧘‍♀️' },
  { id: 'stretching', text: 'Rozciąganie', emoji: '🤸‍♀️' },
  { id: 'skincare', text: 'Maseczki na twarz', emoji: '🧴' },
  { id: 'photos', text: 'Przeglądanie zdjęć', emoji: '📸' },
  { id: 'letters', text: 'Pisanie listów', emoji: '💌' },
  { id: 'origami', text: 'Origami', emoji: '🦢' },
];

const homeActivitiesMedium = [
  { id: 'cooking-fancy', text: 'Gotowanie fancy kolacji', emoji: '🍽️' },
  { id: 'movie-marathon', text: 'Maraton filmowy', emoji: '🍿' },
  { id: 'cleaning-fun', text: 'Sprzątanie z muzyką', emoji: '🧹' },
  { id: 'baking', text: 'Pieczenie ciasta', emoji: '🧁' },
  { id: 'crafting', text: 'Robótki ręczne', emoji: '✂️' },
  { id: 'home-spa', text: 'Domowe SPA', emoji: '🛁' },
  { id: 'learning', text: 'Nauka języka', emoji: '📖' },
  { id: 'workout', text: 'Wspólny trening', emoji: '💪' },
  { id: 'photography', text: 'Sesja zdjęciowa', emoji: '📷' },
  { id: 'painting', text: 'Malowanie obrazów', emoji: '🖼️' },
  { id: 'gardening', text: 'Ogrodnictwo domowe', emoji: '🌱' },
  { id: 'organizing', text: 'Organizowanie szaf', emoji: '👗' },
  { id: 'video-editing', text: 'Montaż filmików', emoji: '🎬' },
  { id: 'dancing', text: 'Taniec w salonie', emoji: '💃' },
  { id: 'board-games', text: 'Długie gry planszowe', emoji: '♟️' },
];

const homeActivitiesLong = [
  { id: 'redecoration', text: 'Przerabianie pokoju', emoji: '🏠' },
  { id: 'cooking-course', text: 'Kurs gotowania online', emoji: '👨‍🍳' },
  { id: 'deep-cleaning', text: 'Wielkie sprzątanie', emoji: '🧽' },
  { id: 'diy-project', text: 'Projekt DIY', emoji: '🔨' },
  { id: 'marathon-series', text: 'Maraton serialu', emoji: '📺' },
  { id: 'language-immersion', text: 'Dzień w obcym języku', emoji: '🌍' },
  { id: 'home-office', text: 'Urządzanie biura', emoji: '💻' },
  { id: 'meal-prep', text: 'Przygotowanie posiłków', emoji: '🥘' },
  { id: 'photo-album', text: 'Tworzenie albumu', emoji: '📔' },
  { id: 'furniture-painting', text: 'Malowanie mebli', emoji: '🪑' },
  { id: 'closet-makeover', text: 'Metamorfoza garderoby', emoji: '👚' },
  { id: 'planning', text: 'Planowanie przyszłości', emoji: '📅' },
  { id: 'skill-learning', text: 'Nauka nowej umiejętności', emoji: '🎯' },
  { id: 'digital-detox', text: 'Dzień bez telefonu', emoji: '📵' },
  { id: 'home-theater', text: 'Wieczór kinowy', emoji: '🎭' },
];

const outsideActivitiesShort = [
  { id: 'coffee-walk', text: 'Spacer z kawą', emoji: '☕' },
  { id: 'park-visit', text: 'Park lub skwer', emoji: '🌳' },
  { id: 'ice-cream', text: 'Lody w mieście', emoji: '🍦' },
  { id: 'window-shopping', text: 'Window shopping', emoji: '🛍️' },
  { id: 'playground', text: 'Plac zabaw', emoji: '🎠' },
  { id: 'street-art', text: 'Szukanie murali', emoji: '🎨' },
  { id: 'bookstore', text: 'Księgarnia', emoji: '📚' },
  { id: 'farmers-market', text: 'Targ lub bazar', emoji: '🥕' },
  { id: 'bench-sitting', text: 'Siedzenie na ławce', emoji: '🪑' },
  { id: 'fountain', text: 'Fontanna miejska', emoji: '⛲' },
  { id: 'photo-walk', text: 'Spacer fotograficzny', emoji: '📸' },
  { id: 'dog-watching', text: 'Obserwowanie psów', emoji: '🐕' },
  { id: 'sunset', text: 'Oglądanie zachodu', emoji: '🌅' },
  { id: 'geocaching', text: 'Geocaching', emoji: '🗺️' },
  { id: 'bird-watching', text: 'Obserwacja ptaków', emoji: '🦅' },
];

const outsideActivitiesMedium = [
  { id: 'hiking', text: 'Wycieczka piesza', emoji: '🥾' },
  { id: 'picnic', text: 'Piknik w parku', emoji: '🧺' },
  { id: 'bike-ride', text: 'Jazda na rowerze', emoji: '🚴‍♀️' },
  { id: 'zoo', text: 'Ogród zoologiczny', emoji: '🦁' },
  { id: 'museum', text: 'Muzeum lub galeria', emoji: '🏛️' },
  { id: 'beach', text: 'Nad wodą', emoji: '🏖️' },
  { id: 'market', text: 'Zwiedzanie rynku', emoji: '🏪' },
  { id: 'festival', text: 'Festiwal lub event', emoji: '🎪' },
  { id: 'mini-golf', text: 'Mini golf', emoji: '⛳' },
  { id: 'skateboarding', text: 'Deskorolka/rolki', emoji: '🛹' },
  { id: 'outdoor-gym', text: 'Siłownia zewnętrzna', emoji: '🏋️‍♀️' },
  { id: 'food-truck', text: 'Food trucki', emoji: '🚚' },
  { id: 'vintage-shops', text: 'Sklepy vintage', emoji: '👗' },
  { id: 'architecture', text: 'Zwiedzanie architektury', emoji: '🏰' },
  { id: 'outdoor-concert', text: 'Koncert plenerowy', emoji: '🎵' },
];

const outsideActivitiesLong = [
  { id: 'day-trip', text: 'Wycieczka całodniowa', emoji: '🚗' },
  { id: 'camping', text: 'Camping lub biwak', emoji: '⛺' },
  { id: 'city-exploration', text: 'Eksploracja miasta', emoji: '🗺️' },
  { id: 'adventure-park', text: 'Park rozrywki', emoji: '🎢' },
  { id: 'spa-day', text: 'Dzień w SPA', emoji: '🧖‍♀️' },
  { id: 'shopping-day', text: 'Dzień zakupów', emoji: '🛒' },
  { id: 'food-tour', text: 'Kulinarny tour', emoji: '🍜' },
  { id: 'sports-day', text: 'Dzień sportu', emoji: '🏃‍♀️' },
  { id: 'cultural-day', text: 'Dzień kultury', emoji: '🎭' },
  { id: 'nature-day', text: 'Dzień z naturą', emoji: '🌲' },
  { id: 'workshop', text: 'Warsztaty lub kurs', emoji: '🎨' },
  { id: 'volunteering', text: 'Wolontariat', emoji: '❤️' },
  { id: 'festival-day', text: 'Festiwal całodniowy', emoji: '🎉' },
  { id: 'road-trip', text: 'Spontaniczna podróż', emoji: '🛣️' },
  { id: 'extreme-sports', text: 'Sporty ekstremalne', emoji: '🪂' },
];

// Shuffle function to randomize activities
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const homeActivities = {
  short: shuffleArray(homeActivitiesShort),
  medium: shuffleArray(homeActivitiesMedium),
  long: shuffleArray(homeActivitiesLong),
};

export const outsideActivities = {
  short: shuffleArray(outsideActivitiesShort),
  medium: shuffleArray(outsideActivitiesMedium),
  long: shuffleArray(outsideActivitiesLong),
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
