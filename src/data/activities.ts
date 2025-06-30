
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

// Massive database of home activities (200+ items)
const allHomeActivities = [
  // Entertainment & Media
  { id: 'netflix', text: 'Netflix & Chill', emoji: '📺' },
  { id: 'movies', text: 'Maraton filmowy', emoji: '🍿' },
  { id: 'series', text: 'Oglądanie serialu', emoji: '📺' },
  { id: 'youtube', text: 'YouTube videos', emoji: '📱' },
  { id: 'tiktok', text: 'TikTok razem', emoji: '🎵' },
  { id: 'podcasts', text: 'Słuchanie podcastów', emoji: '🎧' },
  { id: 'audiobooks', text: 'Audiobooki', emoji: '📚' },
  { id: 'music', text: 'Słuchanie muzyki', emoji: '🎵' },
  { id: 'karaoke', text: 'Karaoke domowe', emoji: '🎤' },
  { id: 'dancing', text: 'Taniec w salonie', emoji: '💃' },
  { id: 'radio', text: 'Radio online', emoji: '📻' },
  { id: 'documentaries', text: 'Dokumenty', emoji: '🎬' },
  
  // Cooking & Food
  { id: 'cooking', text: 'Gotowanie razem', emoji: '👩‍🍳' },
  { id: 'baking', text: 'Pieczenie ciasta', emoji: '🧁' },
  { id: 'pizza-making', text: 'Robienie pizzy', emoji: '🍕' },
  { id: 'pasta', text: 'Makaron domowy', emoji: '🍝' },
  { id: 'desserts', text: 'Robienie deserów', emoji: '🍰' },
  { id: 'smoothies', text: 'Smoothie bowl', emoji: '🥤' },
  { id: 'fancy-dinner', text: 'Fancy kolacja', emoji: '🍽️' },
  { id: 'breakfast', text: 'Śniadanie do łóżka', emoji: '🥞' },
  { id: 'tea-time', text: 'Herbatka z ciasteczkami', emoji: '🍵' },
  { id: 'coffee', text: 'Parzenie kawy', emoji: '☕' },
  { id: 'cocktails', text: 'Koktajle bezalkoholowe', emoji: '🍹' },
  { id: 'bread', text: 'Pieczenie chleba', emoji: '🍞' },
  { id: 'sushi', text: 'Sushi domowe', emoji: '🍣' },
  { id: 'tacos', text: 'Tacos night', emoji: '🌮' },
  { id: 'asian-food', text: 'Azjatyckie jedzenie', emoji: '🥢' },
  { id: 'italian', text: 'Włoska kuchnia', emoji: '🇮🇹' },
  { id: 'mexican', text: 'Meksykańskie smaki', emoji: '🌶️' },
  { id: 'indian', text: 'Indyjskie curry', emoji: '🍛' },
  { id: 'mediterranean', text: 'Śródziemnomorskie', emoji: '🫒' },
  { id: 'healthy-cooking', text: 'Zdrowe gotowanie', emoji: '🥗' },
  { id: 'meal-prep', text: 'Przygotowanie posiłków', emoji: '🥘' },
  { id: 'fermentation', text: 'Fermentacja', emoji: '🥒' },
  { id: 'preserving', text: 'Przetwory', emoji: '🍯' },
  { id: 'wine-pairing', text: 'Degustacja win', emoji: '🍷' },
  { id: 'chocolate-making', text: 'Czekolada domowa', emoji: '🍫' },
  
  // Games & Entertainment
  { id: 'board-games', text: 'Gry planszowe', emoji: '🎲' },
  { id: 'card-games', text: 'Gry w karty', emoji: '🃏' },
  { id: 'video-games', text: 'Gry wideo', emoji: '🎮' },
  { id: 'puzzle', text: 'Układanie puzzli', emoji: '🧩' },
  { id: 'trivia', text: 'Quiz wiedzy', emoji: '🧠' },
  { id: 'charades', text: 'Kalambury', emoji: '🎭' },
  { id: 'riddles', text: 'Zagadki', emoji: '🤔' },
  { id: 'crossword', text: 'Krzyżówki', emoji: '📝' },
  { id: 'sudoku', text: 'Sudoku', emoji: '🔢' },
  { id: 'chess', text: 'Szachy', emoji: '♟️' },
  { id: 'checkers', text: 'Warcaby', emoji: '⚫' },
  { id: 'scrabble', text: 'Scrabble', emoji: '📝' },
  { id: 'monopoly', text: 'Monopoly', emoji: '🏠' },
  { id: 'uno', text: 'UNO', emoji: '🎨' },
  { id: 'poker', text: 'Poker', emoji: '🎰' },
  { id: 'jenga', text: 'Jenga', emoji: '🏗️' },
  { id: 'twister', text: 'Twister', emoji: '🌀' },
  { id: 'pictionary', text: 'Pictionary', emoji: '🎨' },
  { id: 'truth-or-dare', text: 'Prawda czy wyzwanie', emoji: '💭' },
  { id: 'never-have-i', text: 'Nigdy nie robiłem', emoji: '🙋‍♀️' },
  { id: 'would-you-rather', text: 'Co wolisz', emoji: '🤷‍♀️' },
  { id: 'storytelling', text: 'Opowiadanie historii', emoji: '📖' },
  { id: 'memory-games', text: 'Gry pamięciowe', emoji: '🧠' },
  { id: 'word-games', text: 'Gry słowne', emoji: '💬' },
  
  // Creative Activities
  { id: 'drawing', text: 'Rysowanie razem', emoji: '🎨' },
  { id: 'painting', text: 'Malowanie obrazów', emoji: '🖼️' },
  { id: 'crafting', text: 'Robótki ręczne', emoji: '✂️' },
  { id: 'origami', text: 'Origami', emoji: '🦢' },
  { id: 'scrapbooking', text: 'Scrapbooking', emoji: '📔' },
  { id: 'pottery', text: 'Ceramika', emoji: '🏺' },
  { id: 'jewelry', text: 'Robienie biżuterii', emoji: '💍' },
  { id: 'candles', text: 'Świece domowe', emoji: '🕯️' },
  { id: 'soap-making', text: 'Mydła domowe', emoji: '🧼' },
  { id: 'knitting', text: 'Szydełkowanie', emoji: '🧶' },
  { id: 'embroidery', text: 'Haftowanie', emoji: '🪡' },
  { id: 'calligraphy', text: 'Kaligrafia', emoji: '🖋️' },
  { id: 'watercolor', text: 'Akwarele', emoji: '🎨' },
  { id: 'digital-art', text: 'Sztuka cyfrowa', emoji: '💻' },
  { id: 'photography', text: 'Sesja zdjęciowa', emoji: '📷' },
  { id: 'photo-editing', text: 'Edycja zdjęć', emoji: '🖼️' },
  { id: 'video-editing', text: 'Montaż filmików', emoji: '🎬' },
  { id: 'music-making', text: 'Tworzenie muzyki', emoji: '🎵' },
  { id: 'writing', text: 'Pisanie opowiadań', emoji: '✍️' },
  { id: 'poetry', text: 'Pisanie wierszy', emoji: '📝' },
  { id: 'blogging', text: 'Prowadzenie bloga', emoji: '💻' },
  { id: 'vlogging', text: 'Nagrywanie vloga', emoji: '📹' },
  { id: 'stop-motion', text: 'Animacja poklatkowa', emoji: '🎞️' },
  { id: 'comic-strip', text: 'Komiks', emoji: '💭' },
  { id: 'fashion-design', text: 'Projektowanie mody', emoji: '👗' },
  { id: 'interior-design', text: 'Aranżacja wnętrz', emoji: '🏠' },
  
  // Wellness & Self-care
  { id: 'meditation', text: 'Medytacja', emoji: '🧘‍♀️' },
  { id: 'yoga', text: 'Joga domowa', emoji: '🧘‍♂️' },
  { id: 'stretching', text: 'Rozciąganie', emoji: '🤸‍♀️' },
  { id: 'home-spa', text: 'Domowe SPA', emoji: '🛁' },
  { id: 'face-masks', text: 'Maseczki na twarz', emoji: '🧴' },
  { id: 'manicure', text: 'Manicure', emoji: '💅' },
  { id: 'pedicure', text: 'Pedicure', emoji: '🦶' },
  { id: 'hair-care', text: 'Pielęgnacja włosów', emoji: '💇‍♀️' },
  { id: 'aromatherapy', text: 'Aromaterapia', emoji: '🌸' },
  { id: 'massage', text: 'Masaż', emoji: '💆‍♀️' },
  { id: 'breathing', text: 'Ćwiczenia oddechowe', emoji: '🫁' },
  { id: 'mindfulness', text: 'Uważność', emoji: '🧠' },
  { id: 'journaling', text: 'Pisanie dziennika', emoji: '📓' },
  { id: 'gratitude', text: 'Dziennik wdzięczności', emoji: '🙏' },
  { id: 'affirmations', text: 'Afirmacje', emoji: '💫' },
  { id: 'visualization', text: 'Wizualizacja', emoji: '🌟' },
  { id: 'detox', text: 'Cyfrowy detoks', emoji: '📵' },
  { id: 'sleep-hygiene', text: 'Higiena snu', emoji: '😴' },
  { id: 'skincare', text: 'Pielęgnacja skóry', emoji: '🧴' },
  { id: 'essential-oils', text: 'Olejki eteryczne', emoji: '🌿' },
  { id: 'tea-ceremony', text: 'Ceremonia herbaty', emoji: '🍵' },
  { id: 'sound-healing', text: 'Terapia dźwiękiem', emoji: '🎵' },
  { id: 'crystal-healing', text: 'Kryształoterapia', emoji: '💎' },
  { id: 'reiki', text: 'Reiki', emoji: '✋' },
  { id: 'chakra-balancing', text: 'Balansowanie czakr', emoji: '🌈' },
  
  // Learning & Development
  { id: 'language-learning', text: 'Nauka języka', emoji: '📖' },
  { id: 'online-courses', text: 'Kursy online', emoji: '💻' },
  { id: 'reading', text: 'Czytanie książek', emoji: '📚' },
  { id: 'research', text: 'Badania tematów', emoji: '🔍' },
  { id: 'skill-learning', text: 'Nowa umiejętność', emoji: '🎯' },
  { id: 'instrument', text: 'Nauka gry na instrumencie', emoji: '🎸' },
  { id: 'coding', text: 'Programowanie', emoji: '💻' },
  { id: 'math', text: 'Matematyka', emoji: '🔢' },
  { id: 'science', text: 'Nauka ścisła', emoji: '🧪' },
  { id: 'history', text: 'Historia', emoji: '📜' },
  { id: 'geography', text: 'Geografia', emoji: '🌍' },
  { id: 'astronomy', text: 'Astronomia', emoji: '🌟' },
  { id: 'philosophy', text: 'Filozofia', emoji: '🤔' },
  { id: 'psychology', text: 'Psychologia', emoji: '🧠' },
  { id: 'economics', text: 'Ekonomia', emoji: '💰' },
  { id: 'politics', text: 'Polityka', emoji: '🏛️' },
  { id: 'art-history', text: 'Historia sztuki', emoji: '🎨' },
  { id: 'literature', text: 'Literatura', emoji: '📚' },
  { id: 'mythology', text: 'Mitologia', emoji: '🐉' },
  { id: 'religion', text: 'Religie świata', emoji: '🕊️' },
  { id: 'culture', text: 'Kultura', emoji: '🌏' },
  { id: 'anthropology', text: 'Antropologia', emoji: '🗿' },
  { id: 'archaeology', text: 'Archeologia', emoji: '🏺' },
  { id: 'biology', text: 'Biologia', emoji: '🧬' },
  { id: 'chemistry', text: 'Chemia', emoji: '⚗️' },
  { id: 'physics', text: 'Fizyka', emoji: '🔬' },
  
  // Organization & Productivity
  { id: 'cleaning', text: 'Sprzątanie z muzyką', emoji: '🧹' },
  { id: 'organizing', text: 'Organizowanie szaf', emoji: '👗' },
  { id: 'decluttering', text: 'Uporządkowanie', emoji: '📦' },
  { id: 'planning', text: 'Planowanie przyszłości', emoji: '📅' },
  { id: 'budgeting', text: 'Planowanie budżetu', emoji: '💰' },
  { id: 'goal-setting', text: 'Wyznaczanie celów', emoji: '🎯' },
  { id: 'time-management', text: 'Zarządzanie czasem', emoji: '⏰' },
  { id: 'productivity', text: 'Produktywność', emoji: '📈' },
  { id: 'habit-tracking', text: 'Śledzenie nawyków', emoji: '📊' },
  { id: 'meal-planning', text: 'Planowanie posiłków', emoji: '🍽️' },
  { id: 'wardrobe-planning', text: 'Planowanie garderoby', emoji: '👚' },
  { id: 'shopping-lists', text: 'Listy zakupów', emoji: '🛒' },
  { id: 'inventory', text: 'Inwentaryzacja', emoji: '📋' },
  { id: 'filing', text: 'Segregowanie dokumentów', emoji: '📁' },
  { id: 'digital-cleanup', text: 'Porządki cyfrowe', emoji: '💻' },
  { id: 'photo-organization', text: 'Organizacja zdjęć', emoji: '📸' },
  { id: 'book-sorting', text: 'Sortowanie książek', emoji: '📚' },
  { id: 'music-organization', text: 'Organizacja muzyki', emoji: '🎵' },
  { id: 'contact-cleanup', text: 'Porządki w kontaktach', emoji: '📞' },
  { id: 'email-cleanup', text: 'Porządki w mailach', emoji: '📧' },
  { id: 'subscription-review', text: 'Przegląd subskrypcji', emoji: '💳' },
  { id: 'password-update', text: 'Aktualizacja haseł', emoji: '🔐' },
  { id: 'backup-files', text: 'Backup plików', emoji: '💾' },
  { id: 'calendar-sync', text: 'Synchronizacja kalendarzy', emoji: '📅' },
  { id: 'app-cleanup', text: 'Porządki w aplikacjach', emoji: '📱' },
  
  // Hobbies & Interests
  { id: 'gardening', text: 'Ogrodnictwo domowe', emoji: '🌱' },
  { id: 'herb-garden', text: 'Ogródek ziołowy', emoji: '🌿' },
  { id: 'succulent-care', text: 'Opieka nad sukulentami', emoji: '🌵' },
  { id: 'flower-arranging', text: 'Aranżacja kwiatów', emoji: '💐' },
  { id: 'terrariums', text: 'Terraria', emoji: '🌿' },
  { id: 'bonsai', text: 'Bonsai', emoji: '🌳' },
  { id: 'hydroponics', text: 'Hydroponika', emoji: '💧' },
  { id: 'composting', text: 'Kompostowanie', emoji: '🌱' },
  { id: 'seed-starting', text: 'Kiełkowanie nasion', emoji: '🌱' },
  { id: 'plant-propagation', text: 'Rozmnażanie roślin', emoji: '🌿' },
  { id: 'aquarium', text: 'Akwarium', emoji: '🐠' },
  { id: 'bird-watching', text: 'Obserwacja ptaków', emoji: '🦅' },
  { id: 'insect-study', text: 'Badanie owadów', emoji: '🦋' },
  { id: 'rock-collecting', text: 'Kolekcjonowanie kamieni', emoji: '🪨' },
  { id: 'coin-collecting', text: 'Numizmatyka', emoji: '🪙' },
  { id: 'stamp-collecting', text: 'Filatelistyka', emoji: '📮' },
  { id: 'model-building', text: 'Budowanie modeli', emoji: '🏗️' },
  { id: 'puzzle-solving', text: 'Rozwiązywanie łamigłówek', emoji: '🧩' },
  { id: 'magic-tricks', text: 'Sztuczki magiczne', emoji: '🎩' },
  { id: 'juggling', text: 'Żonglerka', emoji: '🤹‍♀️' },
  { id: 'balloon-animals', text: 'Balony modelarskie', emoji: '🎈' },
  { id: 'card-tricks', text: 'Sztuczki z kartami', emoji: '🃏' },
  { id: 'ventriloquism', text: 'Brzuchomówstwo', emoji: '🗣️' },
  { id: 'mime', text: 'Pantomima', emoji: '🎭' },
  { id: 'puppet-shows', text: 'Teatr lalek', emoji: '🎪' },
  { id: 'shadow-puppets', text: 'Teatr cieni', emoji: '👥' },
];

// Massive database of outside activities (200+ items)
const allOutsideActivities = [
  // Nature & Outdoors
  { id: 'hiking', text: 'Wycieczka piesza', emoji: '🥾' },
  { id: 'nature-walk', text: 'Spacer po lesie', emoji: '🌲' },
  { id: 'park-visit', text: 'Park miejski', emoji: '🌳' },
  { id: 'beach', text: 'Nad wodą', emoji: '🏖️' },
  { id: 'lake', text: 'Nad jeziorem', emoji: '🏞️' },
  { id: 'mountain', text: 'W górach', emoji: '⛰️' },
  { id: 'forest', text: 'Las', emoji: '🌲' },
  { id: 'waterfall', text: 'Wodospad', emoji: '💧' },
  { id: 'river', text: 'Nad rzeką', emoji: '🏞️' },
  { id: 'meadow', text: 'Łąka', emoji: '🌻' },
  { id: 'field', text: 'Pole', emoji: '🌾' },
  { id: 'garden', text: 'Ogród botaniczny', emoji: '🌺' },
  { id: 'arboretum', text: 'Arboretum', emoji: '🌳' },
  { id: 'nature-reserve', text: 'Rezerwat przyrody', emoji: '🦅' },
  { id: 'national-park', text: 'Park narodowy', emoji: '🏞️' },
  { id: 'wildlife-park', text: 'Park dzikich zwierząt', emoji: '🦌' },
  { id: 'bird-sanctuary', text: 'Sanktuarium ptaków', emoji: '🦜' },
  { id: 'butterfly-garden', text: 'Ogród motyli', emoji: '🦋' },
  { id: 'flower-fields', text: 'Pola kwiatów', emoji: '🌷' },
  { id: 'orchard', text: 'Sad', emoji: '🍎' },
  { id: 'vineyard', text: 'Winnica', emoji: '🍇' },
  { id: 'farm-visit', text: 'Gospodarstwo', emoji: '🚜' },
  { id: 'petting-zoo', text: 'Zoo kontaktowe', emoji: '🐐' },
  { id: 'horse-ranch', text: 'Stadnina koni', emoji: '🐎' },
  { id: 'alpaca-farm', text: 'Farma alpak', emoji: '🦙' },
  
  // Sports & Activities
  { id: 'bike-ride', text: 'Jazda na rowerze', emoji: '🚴‍♀️' },
  { id: 'rollerblading', text: 'Rolki', emoji: '🛼' },
  { id: 'skateboarding', text: 'Deskorolka', emoji: '🛹' },
  { id: 'scooter', text: 'Hulajnoga', emoji: '🛴' },
  { id: 'jogging', text: 'Jogging', emoji: '🏃‍♀️' },
  { id: 'running', text: 'Bieganie', emoji: '🏃‍♂️' },
  { id: 'nordic-walking', text: 'Nordic walking', emoji: '🥾' },
  { id: 'swimming', text: 'Pływanie', emoji: '🏊‍♀️' },
  { id: 'kayaking', text: 'Kajaki', emoji: '🛶' },
  { id: 'canoeing', text: 'Kanu', emoji: '🛶' },
  { id: 'paddleboarding', text: 'SUP', emoji: '🏄‍♀️' },
  { id: 'sailing', text: 'Żeglarstwo', emoji: '⛵' },
  { id: 'fishing', text: 'Wędkarstwo', emoji: '🎣' },
  { id: 'rock-climbing', text: 'Wspinaczka', emoji: '🧗‍♀️' },
  { id: 'bouldering', text: 'Bouldering', emoji: '🪨' },
  { id: 'tennis', text: 'Tenis', emoji: '🎾' },
  { id: 'badminton', text: 'Badminton', emoji: '🏸' },
  { id: 'ping-pong', text: 'Ping pong', emoji: '🏓' },
  { id: 'volleyball', text: 'Siatkówka', emoji: '🏐' },
  { id: 'basketball', text: 'Koszykówka', emoji: '🏀' },
  { id: 'football', text: 'Piłka nożna', emoji: '⚽' },
  { id: 'frisbee', text: 'Frisbee', emoji: '🥏' },
  { id: 'ultimate-frisbee', text: 'Ultimate frisbee', emoji: '🥏' },
  { id: 'disc-golf', text: 'Disc golf', emoji: '🥏' },
  { id: 'mini-golf', text: 'Mini golf', emoji: '⛳' },
  { id: 'golf', text: 'Golf', emoji: '🏌️‍♀️' },
  { id: 'archery', text: 'Łucznictwo', emoji: '🏹' },
  { id: 'paintball', text: 'Paintball', emoji: '🎯' },
  { id: 'laser-tag', text: 'Laser tag', emoji: '🔫' },
  { id: 'go-karts', text: 'Gokarty', emoji: '🏎️' },
  { id: 'bowling', text: 'Kręgle', emoji: '🎳' },
  { id: 'pool', text: 'Bilard', emoji: '🎱' },
  { id: 'darts', text: 'Rzutki', emoji: '🎯' },
  { id: 'axe-throwing', text: 'Rzucanie siekier', emoji: '🪓' },
  { id: 'escape-room', text: 'Escape room', emoji: '🗝️' },
  { id: 'trampoline', text: 'Trampoliny', emoji: '🤸‍♀️' },
  { id: 'ice-skating', text: 'Łyżwy', emoji: '⛸️' },
  { id: 'roller-skating', text: 'Wrotki', emoji: '🛼' },
  { id: 'sledding', text: 'Sanki', emoji: '🛷' },
  { id: 'skiing', text: 'Narty', emoji: '🎿' },
  { id: 'snowboarding', text: 'Snowboard', emoji: '🏂' },
  { id: 'paragliding', text: 'Paralotniarstwo', emoji: '🪂' },
  { id: 'skydiving', text: 'Spadochroniarstwo', emoji: '🪂' },
  { id: 'bungee-jumping', text: 'Bungee jumping', emoji: '🤸‍♀️' },
  { id: 'zip-lining', text: 'Tyrolka', emoji: '🚠' },
  { id: 'horseback-riding', text: 'Jazda konna', emoji: '🐎' },
  { id: 'quad-biking', text: 'Quady', emoji: '🏍️' },
  { id: 'motorcycle', text: 'Motocykl', emoji: '🏍️' },
  { id: 'karting', text: 'Karting', emoji: '🏎️' },
  { id: 'rally', text: 'Rajdy', emoji: '🚗' },
  
  // Culture & Entertainment
  { id: 'museum', text: 'Muzeum', emoji: '🏛️' },
  { id: 'art-gallery', text: 'Galeria sztuki', emoji: '🎨' },
  { id: 'exhibition', text: 'Wystawa', emoji: '🖼️' },
  { id: 'theater', text: 'Teatr', emoji: '🎭' },
  { id: 'opera', text: 'Opera', emoji: '🎵' },
  { id: 'ballet', text: 'Balet', emoji: '🩰' },
  { id: 'concert', text: 'Koncert', emoji: '🎤' },
  { id: 'festival', text: 'Festiwal', emoji: '🎪' },
  { id: 'cinema', text: 'Kino', emoji: '🎬' },
  { id: 'drive-in', text: 'Kino samochodowe', emoji: '🚗' },
  { id: 'outdoor-cinema', text: 'Kino plenerowe', emoji: '🌟' },
  { id: 'comedy-show', text: 'Stand-up', emoji: '😂' },
  { id: 'magic-show', text: 'Pokaz magii', emoji: '🎩' },
  { id: 'circus', text: 'Cyrk', emoji: '🎪' },
  { id: 'street-performance', text: 'Występy uliczne', emoji: '🎭' },
  { id: 'flash-mob', text: 'Flash mob', emoji: '💃' },
  { id: 'karaoke-bar', text: 'Karaoke bar', emoji: '🎤' },
  { id: 'trivia-night', text: 'Wieczór quizowy', emoji: '🧠' },
  { id: 'bingo', text: 'Bingo', emoji: '🎰' },
  { id: 'casino', text: 'Kasyno', emoji: '🎰' },
  { id: 'dance-class', text: 'Lekcja tańca', emoji: '💃' },
  { id: 'cooking-class', text: 'Warsztaty kulinarne', emoji: '👨‍🍳' },
  { id: 'art-class', text: 'Warsztaty artystyczne', emoji: '🎨' },
  { id: 'pottery-class', text: 'Warsztaty ceramiczne', emoji: '🏺' },
  { id: 'photography-class', text: 'Warsztaty fotograficzne', emoji: '📷' },
  { id: 'music-lesson', text: 'Lekcja muzyki', emoji: '🎵' },
  { id: 'language-exchange', text: 'Wymiana językowa', emoji: '🗣️' },
  { id: 'book-club', text: 'Klub książki', emoji: '📚' },
  { id: 'wine-tasting', text: 'Degustacja win', emoji: '🍷' },
  { id: 'beer-tasting', text: 'Degustacja piw', emoji: '🍺' },
  { id: 'food-tasting', text: 'Degustacja jedzenia', emoji: '🍽️' },
  { id: 'tea-ceremony', text: 'Ceremonia herbaty', emoji: '🍵' },
  { id: 'coffee-cupping', text: 'Degustacja kawy', emoji: '☕' },
  
  // Shopping & Markets
  { id: 'shopping-mall', text: 'Centrum handlowe', emoji: '🛍️' },
  { id: 'outlet', text: 'Outlet', emoji: '🏪' },
  { id: 'vintage-shops', text: 'Sklepy vintage', emoji: '👗' },
  { id: 'thrift-stores', text: 'Sklepy z używaną odzieżą', emoji: '👚' },
  { id: 'antique-shops', text: 'Sklepy z antykami', emoji: '🏺' },
  { id: 'bookstores', text: 'Księgarnie', emoji: '📚' },
  { id: 'record-stores', text: 'Sklepy z płytami', emoji: '📀' },
  { id: 'craft-stores', text: 'Sklepy rękodzielnicze', emoji: '✂️' },
  { id: 'farmers-market', text: 'Targ rolniczy', emoji: '🥕' },
  { id: 'flea-market', text: 'Pchli targ', emoji: '🏪' },
  { id: 'night-market', text: 'Nocny targ', emoji: '🌙' },
  { id: 'christmas-market', text: 'Jarmark bożonarodzeniowy', emoji: '🎄' },
  { id: 'craft-fair', text: 'Targi rękodzieła', emoji: '🎨' },
  { id: 'art-market', text: 'Targ sztuki', emoji: '🖼️' },
  { id: 'flower-market', text: 'Targ kwiatowy', emoji: '🌸' },
  { id: 'fish-market', text: 'Targ rybny', emoji: '🐟' },
  { id: 'spice-market', text: 'Targ przypraw', emoji: '🌶️' },
  { id: 'textile-market', text: 'Targ tekstylny', emoji: '🧵' },
  { id: 'jewelry-market', text: 'Targ biżuterii', emoji: '💍' },
  { id: 'souvenir-shops', text: 'Sklepy z pamiątkami', emoji: '🎁' },
  { id: 'local-boutiques', text: 'Lokalne butiki', emoji: '👗' },
  { id: 'department-stores', text: 'Domy towarowe', emoji: '🏬' },
  { id: 'specialty-stores', text: 'Sklepy specjalistyczne', emoji: '🏪' },
  { id: 'electronics-stores', text: 'Sklepy elektroniczne', emoji: '📱' },
  { id: 'toy-stores', text: 'Sklepy z zabawkami', emoji: '🧸' },
  { id: 'pet-stores', text: 'Sklepy zoologiczne', emoji: '🐕' },
  { id: 'garden-centers', text: 'Centra ogrodnicze', emoji: '🌱' },
  { id: 'home-improvement', text: 'Sklepy budowlane', emoji: '🔨' },
  { id: 'automotive-stores', text: 'Sklepy motoryzacyjne', emoji: '🚗' },
  { id: 'sporting-goods', text: 'Sklepy sportowe', emoji: '⚽' },
  { id: 'music-stores', text: 'Sklepy muzyczne', emoji: '🎸' },
  
  // Food & Dining
  { id: 'restaurant', text: 'Restauracja', emoji: '🍽️' },
  { id: 'cafe', text: 'Kawiarnia', emoji: '☕' },
  { id: 'bakery', text: 'Piekarnia', emoji: '🥖' },
  { id: 'ice-cream-shop', text: 'Lodziarnia', emoji: '🍦' },
  { id: 'food-truck', text: 'Food truck', emoji: '🚚' },
  { id: 'street-food', text: 'Jedzenie uliczne', emoji: '🌮' },
  { id: 'food-court', text: 'Food court', emoji: '🍽️' },
  { id: 'buffet', text: 'Bufet', emoji: '🍛' },
  { id: 'brunch', text: 'Brunch', emoji: '🥞' },
  { id: 'high-tea', text: 'Popołudniowa herbata', emoji: '🍵' },
  { id: 'wine-bar', text: 'Winiarnia', emoji: '🍷' },
  { id: 'cocktail-bar', text: 'Cocktail bar', emoji: '🍹' },
  { id: 'juice-bar', text: 'Juice bar', emoji: '🥤' },
  { id: 'smoothie-bar', text: 'Smoothie bar', emoji: '🥤' },
  { id: 'tea-house', text: 'Herbaciarnia', emoji: '🍵' },
  { id: 'coffee-roastery', text: 'Palarnia kawy', emoji: '☕' },
  { id: 'brewery', text: 'Browar', emoji: '🍺' },
  { id: 'distillery', text: 'Destylarnia', emoji: '🥃' },
  { id: 'winery', text: 'Winiarnia', emoji: '🍇' },
  { id: 'farmers-table', text: 'Stół rolniczy', emoji: '🥕' },
  { id: 'organic-restaurant', text: 'Restauracja bio', emoji: '🌱' },
  { id: 'vegan-restaurant', text: 'Restauracja wegańska', emoji: '🥗' },
  { id: 'ethnic-cuisine', text: 'Kuchnia etniczna', emoji: '🍜' },
  { id: 'fusion-cuisine', text: 'Kuchnia fusion', emoji: '🍽️' },
  { id: 'fine-dining', text: 'Fine dining', emoji: '🥂' },
  { id: 'casual-dining', text: 'Casual dining', emoji: '🍔' },
  { id: 'fast-casual', text: 'Fast casual', emoji: '🥙' },
  { id: 'pop-up-restaurant', text: 'Pop-up restaurant', emoji: '🎪' },
  { id: 'food-festival', text: 'Festiwal jedzenia', emoji: '🎉' },
  { id: 'cooking-competition', text: 'Konkurs kulinarny', emoji: '🏆' },
  { id: 'food-tour', text: 'Kulinarny tour', emoji: '🍜' },
  { id: 'picnic', text: 'Piknik', emoji: '🧺' },
  { id: 'barbecue', text: 'Grill', emoji: '🔥' },
  { id: 'outdoor-dining', text: 'Jedzenie na świeżym powietrzu', emoji: '🌳' },
  { id: 'rooftop-dining', text: 'Jedzenie na dachu', emoji: '🏙️' },
  { id: 'beachside-dining', text: 'Jedzenie przy plaży', emoji: '🏖️' },
  { id: 'garden-dining', text: 'Jedzenie w ogrodzie', emoji: '🌺' },
  { id: 'terrace-dining', text: 'Jedzenie na tarasie', emoji: '🌅' },
];

// Massive drinks database (200+ items)
export const drinks = [
  // Hot Beverages
  'Kawę ☕', 'Espresso ☕', 'Americano ⚫', 'Cappuccino ☕', 'Latte 🤎', 'Machiato 🤍', 'Mocha 🍫', 'Frappé ❄️',
  'Herbata 🍵', 'Herbata zielona 🍃', 'Herbata czarna ☕', 'Herbata biała 🤍', 'Herbata oolong 🍵', 'Herbata pu-erh 🍵',
  'Earl Grey 🍵', 'English Breakfast ☕', 'Jasmine tea 🌸', 'Chamomile tea 🌼', 'Peppermint tea 🌿', 'Ginger tea 🫚',
  'Turmeric latte 🌟', 'Golden milk 🥛', 'Chai latte 🧡', 'Masala chai 🧡', 'Thai tea 🧡', 'Matcha 🍵', 'Matcha latte 🍵',
  'Hot chocolate 🍫', 'Cocoa 🍫', 'Mulled wine 🍷', 'Glögg 🍷', 'Hot toddy 🥃', 'Irish coffee ☕', 'Baileys coffee ☕',
  
  // Cold Beverages
  'Wodę 💧', 'Wodę gazowaną 💧', 'Wodę niegazowaną 💧', 'Wodę z cytryną 🍋', 'Wodę z limonką 🍋', 'Wodę z ogórkiem 🥒',
  'Wodę z miętą 🌿', 'Wodę kokosową 🥥', 'Wodę z arbuza 🍉', 'Wodę z truskawkami 🍓', 'Wodę z malinami 🍇',
  'Cola 🥤', 'Pepsi 🥤', 'Sprite 💚', 'Fanta 🍊', 'Mountain Dew 🟢', '7UP 🟢', 'Dr Pepper 🟤', 'Root beer 🟤',
  'Ginger ale 🫚', 'Tonic water 💧', 'Soda water 💧', 'Club soda 💧', 'Sparkling water 💧', 'Mineral water 💧',
  'Lemonade 🍋', 'Pink lemonade 🍋', 'Arnold Palmer 🍋', 'Sweet tea 🍵', 'Iced tea 🧊', 'Green iced tea 🍃',
  'Peach iced tea 🍑', 'Raspberry iced tea 🍇', 'Mango iced tea 🥭', 'Passion fruit iced tea 🍈',
  
  // Juices
  'Sok jabłkowy 🍎', 'Sok pomarańczowy 🍊', 'Sok grejpfrutowy 🍊', 'Sok ananasowy 🍍', 'Sok z mango 🥭',
  'Sok z marakui 🍈', 'Sok z granatu 🍇', 'Sok z żurawiny 🍇', 'Sok z aronii 🍇', 'Sok z czarnej porzeczki 🍇',
  'Sok z czerwonej porzeczki 🍇', 'Sok z agrestu 🍇', 'Sok z maliny 🍇', 'Sok z truskawki 🍓', 'Sok z wiśni 🍒',
  'Sok z czereśni 🍒', 'Sok z brzoskwini 🍑', 'Sok z moreli 🍑', 'Sok z śliwki 🍇', 'Sok z winogron 🍇',
  'Sok z banana 🍌', 'Sok z kiwi 🥝', 'Sok z papai 🍈', 'Sok z guawy 🍈', 'Sok z liczi 🍈', 'Sok z dragonfruit 🐉',
  'Sok z buraka 🟣', 'Sok z marchwi 🥕', 'Sok z selera 🥬', 'Sok z ogórka 🥒', 'Sok z pomidora 🍅',
  'Sok z kapusty 🥬', 'Sok z jarmużu 🥬', 'Sok z szpinaku 🥬', 'Sok z pietruszki 🌿', 'Sok z imbiru 🫚',
  
  // Smoothies
  'Smoothie 🥤', 'Smoothie truskawkowe 🍓', 'Smoothie bananowe 🍌', 'Smoothie mango 🥭', 'Smoothie z jagodami 🍇',
  'Smoothie z malinami 🍇', 'Smoothie z czarnymi jagodami 🍇', 'Smoothie z borówkami 🍇', 'Smoothie ananasowe 🍍',
  'Smoothie z kiwi 🥝', 'Smoothie z awokado 🥑', 'Smoothie z bananem i masłem orzechowym 🥜', 'Smoothie proteinowe 💪',
  'Smoothie zielone 🥬', 'Smoothie z jarmużu 🥬', 'Smoothie z szpinakiem 🥬', 'Smoothie detox 🌿',
  'Smoothie z kakao 🍫', 'Smoothie z wanilią 🍦', 'Smoothie z cynamonem 🧡', 'Smoothie z kardamonem 🟤',
  
  // Milkshakes & Dairy
  'Milkshake 🥛', 'Milkshake waniliowy 🍦', 'Milkshake czekoladowy 🍫', 'Milkshake truskawkowy 🍓',
  'Milkshake bananowy 🍌', 'Milkshake karmelowy 🍮', 'Milkshake z masłem orzechowym 🥜', 'Milkshake Oreo 🍪',
  'Mleko 🥛', 'Mleko pełne 🥛', 'Mleko 2% 🥛', 'Mleko chude 🥛', 'Mleko bez laktozy 🥛', 'Mleko kozje 🐐',
  'Mleko owsiane 🌾', 'Mleko migdałowe 🌰', 'Mleko sojowe 🌱', 'Mleko kokosowe 🥥', 'Mleko ryżowe 🍚',
  'Mleko z nerkowca 🥜', 'Mleko z laskowych orzechów 🌰', 'Mleko z makadamia 🌰', 'Mleko z konopi 🌿',
  'Mleko z grochu 🟢', 'Mleko z quinoa 🌾', 'Mleko z amarantusa 🌾', 'Mleko z kaszy 🌾',
  
  // Energy & Sports Drinks
  'Red Bull 🔴', 'Monster 👹', 'Rockstar ⭐', 'Bang 💥', 'Reign 👑', 'Celsius 🔥', 'Prime 🥤', 'Gatorade ⚡',
  'Powerade ⚡', 'Lucozade ⚡', 'Isostar ⚡', 'Aquarius ⚡', 'Pocari Sweat ⚡', 'Vitaminwater 💧',
  'Smart Water 💧', 'Enhanced water 💧', 'Electrolyte water 💧', 'Alkaline water 💧', 'Hydrogen water 💧',
  'Protein shake 💪', 'Pre-workout 💪', 'Post-workout 💪', 'BCAA drink 💪', 'Creatine drink 💪',
  'Glutamine drink 💪', 'Whey protein 💪', 'Casein protein 💪', 'Plant protein 🌱', 'Collagen drink 💪',
  
  // Specialty & Bubble Tea
  'Bubble Tea 🧋', 'Taro bubble tea 🟣', 'Matcha bubble tea 🍵', 'Thai bubble tea 🧡', 'Honeydew bubble tea 🍈',
  'Strawberry bubble tea 🍓', 'Mango bubble tea 🥭', 'Passion fruit bubble tea 🍈', 'Lychee bubble tea 🍈',
  'Brown sugar bubble tea 🟤', 'Classic milk tea 🧋', 'Oolong milk tea 🍵', 'Jasmine milk tea 🌸',
  'Earl Grey milk tea 🍵', 'Hokkaido milk tea 🥛', 'Okinawa milk tea 🥛', 'Thai milk tea 🧡',
  'Vietnamese coffee 🇻🇳', 'Turkish coffee 🇹🇷', 'Greek coffee 🇬🇷', 'Ethiopian coffee 🇪🇹', 'Jamaican coffee 🇯🇲',
  'Cuban coffee 🇨🇺', 'Italian coffee 🇮🇹', 'French coffee 🇫🇷', 'Scandinavian coffee 🇸🇪', 'Bulletproof coffee ☕',
  
  // Fermented & Probiotic
  'Kombucha 🍄', 'Kombucha imbirowa 🫚', 'Kombucha z cytryną 🍋', 'Kombucha z malinami 🍇', 'Kombucha z hibiskusem 🌺',
  'Kefir 🥛', 'Water kefir 💧', 'Jun 🍯', 'Kvass 🍞', 'Tepache 🍍', 'Switchel 🍎', 'Shrub 🍇', 'Drinking vinegar 🍎',
  'Probiotic drink 🦠', 'Prebiotic drink 🌿', 'Fermented tea 🍵', 'Fermented juice 🍇', 'Living soda 🥤',
  'Raw juice 🥬', 'Cold-pressed juice 🥬', 'Celery juice 🥬', 'Wheatgrass shot 🌱', 'Spirulina drink 🌿',
  
  // Mocktails & Fancy Drinks
  'Virgin Mojito 🌿', 'Virgin Piña Colada 🥥', 'Virgin Bloody Mary 🍅', 'Virgin Margarita 🍋', 'Shirley Temple 🍒',
  'Arnold Palmer 🍋', 'Roy Rogers 🍒', 'Virgin Moscow Mule 🫚', 'Virgin Cosmopolitan 🍇', 'Virgin Daiquiri 🍓',
  'Cucumber mint cooler 🥒', 'Watermelon agua fresca 🍉', 'Pineapple ginger fizz 🍍', 'Berry basil smash 🍇',
  'Citrus herb spritzer 🍋', 'Pomegranate sparkler 🍇', 'Peach bellini mocktail 🍑', 'Apple cider 🍎',
  'Mulled apple cider 🍎', 'Spiced cider 🍎', 'Cranberry punch 🍇', 'Fruit punch 🍓', 'Holiday punch 🎄',
  'Summer punch 🌞', 'Tropical punch 🏝️', 'Sparkling punch 💫', 'Sherbet punch 🍦', 'Wedding punch 💒',
  
  // International Drinks
  'Horchata 🥛', 'Tamarind drink 🟤', 'Hibiscus tea 🌺', 'Chrysanthemum tea 🌼', 'Barley tea 🌾', 'Corn silk tea 🌽',
  'Rooibos tea 🟤', 'Honeybush tea 🍯', 'Yerba mate 🧉', 'Guayusa 🌿', 'Yaupon holly 🌿', 'Pine needle tea 🌲',
  'Birch water 🌳', 'Maple water 🍁', 'Cactus water 🌵', 'Aloe vera juice 🌿', 'Noni juice 🍈', 'Goji berry juice 🍇',
  'Acai juice 🍇', 'Mangosteen juice 🍈', 'Rambutan juice 🍈', 'Longan juice 🍈', 'Durian juice 🍈',
  'Jackfruit juice 🍈', 'Soursop juice 🍈', 'Custard apple juice 🍈', 'Star fruit juice 🌟', 'Passion fruit juice 🍈',
  'Calamansi juice 🍋', 'Yuzu juice 🍋', 'Bergamot juice 🍋', 'Buddha's hand tea 🍋', 'Finger lime juice 🍋',
  'Blood orange juice 🍊', 'Cara cara orange juice 🍊', 'Navel orange juice 🍊', 'Valencia orange juice 🍊',
  'Tangelo juice 🍊', 'Tangerine juice 🍊', 'Clementine juice 🍊', 'Mandarin juice 🍊', 'Satsuma juice 🍊'
];

// Massive foods database (200+ items)
export const foods = [
  // Asian Cuisine
  'Sushi 🍣', 'Sashimi 🍣', 'Maki 🍣', 'Nigiri 🍣', 'Temaki 🍣', 'Chirashi 🍣', 'Poke bowl 🍣', 'Onigiri 🍙',
  'Ramen 🍜', 'Udon 🍜', 'Soba 🍜', 'Yakisoba 🍜', 'Pho 🍲', 'Pad Thai 🍝', 'Tom Yum 🍲', 'Green Curry 🍛',
  'Red Curry 🍛', 'Massaman Curry 🍛', 'Panang Curry 🍛', 'Pad See Ew 🍝', 'Drunken Noodles 🍜', 'Som Tam 🥗',
  'Mango Sticky Rice 🥭', 'Thai Basil Chicken 🐔', 'Larb 🥗', 'Papaya Salad 🥗', 'Thai Fried Rice 🍚',
  'Kung Pao Chicken 🐔', 'Sweet and Sour Pork 🐷', 'Mapo Tofu 🧊', 'Peking Duck 🦆', 'Xiaolongbao 🥟',
  'Dumplings 🥟', 'Wontons 🥟', 'Spring Rolls 🌯', 'Egg Rolls 🌯', 'Fried Rice 🍚', 'Chow Mein 🍜',
  'Lo Mein 🍜', 'General Tso\'s Chicken 🐔', 'Orange Chicken 🐔', 'Sesame Chicken 🐔', 'Mongolian Beef 🥩',
  'Szechuan Beef 🥩', 'Hot Pot 🍲', 'Korean BBQ 🥩', 'Bulgogi 🥩', 'Galbi 🥩', 'Bibimbap 🍚', 'Kimchi 🥬',
  'Japchae 🍜', 'Tteokbokki 🌶️', 'Korean Fried Chicken 🐔', 'Samgyeopsal 🥓', 'Jajangmyeon 🍜', 'Naengmyeon 🍜',
  
  // Italian Cuisine
  'Pizza 🍕', 'Margherita Pizza 🍕', 'Pepperoni Pizza 🍕', 'Hawaiian Pizza 🍕', 'Meat Lovers Pizza 🍕',
  'Vegetarian Pizza 🍕', 'White Pizza 🍕', 'Calzone 🥟', 'Stromboli 🌯', 'Focaccia 🍞', 'Bruschetta 🍞',
  'Makaron 🍝', 'Spaghetti 🍝', 'Fettuccine 🍝', 'Penne 🍝', 'Rigatoni 🍝', 'Fusilli 🍝', 'Linguine 🍝',
  'Angel Hair 🍝', 'Ravioli 🥟', 'Tortellini 🥟', 'Gnocchi 🥟', 'Lasagna 🍝', 'Carbonara 🍝', 'Alfredo 🍝',
  'Bolognese 🍝', 'Puttanesca 🍝', 'Amatriciana 🍝', 'Cacio e Pepe 🍝', 'Aglio e Olio 🍝', 'Pesto 🍝',
  'Risotto 🍚', 'Osso Buco 🍖', 'Veal Parmigiana 🍖', 'Chicken Parmigiana 🐔', 'Eggplant Parmigiana 🍆',
  'Caprese 🍅', 'Antipasto 🧀', 'Prosciutto 🥓', 'Salami 🥩', 'Mortadella 🥩', 'Pancetta 🥓', 'Guanciale 🥓',
  'Mozzarella 🧀', 'Burrata 🧀', 'Parmigiano 🧀', 'Pecorino 🧀', 'Gorgonzola 🧀', 'Ricotta 🧀',
  'Tiramisu 🍰', 'Cannoli 🍰', 'Gelato 🍨', 'Panna Cotta 🍮', 'Zabaglione 🍮', 'Affogato ☕',
  
  // Mexican Cuisine
  'Tacos 🌮', 'Burritos 🌯', 'Quesadillas 🌮', 'Enchiladas 🌮', 'Tamales 🌮', 'Tostadas 🌮', 'Nachos 🧀',
  'Guacamole 🥑', 'Salsa 🍅', 'Pico de Gallo 🍅', 'Chiles Rellenos 🌶️', 'Mole 🍫', 'Pozole 🍲',
  'Menudo 🍲', 'Carnitas 🐷', 'Al Pastor 🐷', 'Carne Asada 🥩', 'Barbacoa 🐄', 'Chorizo 🌭', 'Chili con Carne 🌶️',
  'Fajitas 🌮', 'Chimichanga 🌯', 'Flautas 🌮', 'Elote 🌽', 'Esquites 🌽', 'Mexican Rice 🍚', 'Refried Beans 🫘',
  'Black Beans 🫘', 'Pinto Beans 🫘', 'Tres Leches 🍰', 'Flan 🍮', 'Churros 🍩', 'Sopapillas 🍯',
  'Horchata 🥛', 'Agua Fresca 🍉', 'Margaritas 🍹', 'Micheladas 🍺', 'Paletas 🍭', 'Dulce de Leche 🍯',
  
  // American Cuisine
  'Burger 🍔', 'Cheeseburger 🍔', 'Double Cheeseburger 🍔', 'Bacon Burger 🥓', 'BBQ Burger 🍔',
  'Mushroom Swiss Burger 🍄', 'Veggie Burger 🥗', 'Turkey Burger 🦃', 'Salmon Burger 🐟', 'Slider 🍔',
  'Hot Dog 🌭', 'Chili Dog 🌭', 'Corn Dog 🌭', 'Bratwurst 🌭', 'Italian Sausage 🌭', 'Polish Sausage 🌭',
  'BBQ Ribs 🍖', 'Pulled Pork 🐷', 'Brisket 🥩', 'Smoked Chicken 🐔', 'Wings 🍗', 'Buffalo Wings 🍗',
  'BBQ Wings 🍗', 'Honey Garlic Wings 🍗', 'Teriyaki Wings 🍗', 'Nashville Hot Chicken 🐔', 'Fried Chicken 🍗',
  'Chicken and Waffles 🧇', 'Chicken Tenders 🍗', 'Popcorn Chicken 🍗', 'Mac and Cheese 🧀', 'Grilled Cheese 🧀',
  'BLT 🥓', 'Club Sandwich 🥪', 'Reuben 🥪', 'Philly Cheesesteak 🥪', 'French Dip 🥪', 'Meatball Sub 🥪',
  'PB&J 🥜', 'Tuna Salad 🐟', 'Chicken Salad 🐔', 'Egg Salad 🥚', 'Potato Salad 🥔', 'Coleslaw 🥬',
  'Mashed Potatoes 🥔', 'French Fries 🍟', 'Onion Rings 🧅', 'Mozzarella Sticks 🧀', 'Jalapeño Poppers 🌶️',
  'Apple Pie 🥧', 'Cheesecake 🍰', 'Brownies 🍫', 'Cookies 🍪', 'Donuts 🍩', 'Pancakes 🥞', 'Waffles 🧇',
  
  // Indian Cuisine
  'Curry 🍛', 'Chicken Tikka Masala 🐔', 'Butter Chicken 🐔', 'Tandoori Chicken 🐔', 'Chicken Curry 🐔',
  'Lamb Curry 🐑', 'Beef Curry 🐄', 'Fish Curry 🐟', 'Vegetable Curry 🥬', 'Dal 🫘', 'Chickpea Curry 🫘',
  'Palak Paneer 🥬', 'Paneer Makhani 🧀', 'Aloo Gobi 🥔', 'Baingan Bharta 🍆', 'Okra Curry 🥒',
  'Biryani 🍚', 'Pulao 🍚', 'Fried Rice 🍚', 'Jeera Rice 🍚', 'Coconut Rice 🥥', 'Lemon Rice 🍋',
  'Naan 🍞', 'Roti 🍞', 'Chapati 🍞', 'Paratha 🍞', 'Puri 🍞', 'Bhatura 🍞', 'Dosa 🥞', 'Idli 🍚',
  'Uttapam 🥞', 'Vada 🍩', 'Samosa 🥟', 'Pakora 🥗', 'Chaat 🥗', 'Pani Puri 🥟', 'Bhel Puri 🥗',
  'Chole Bhature 🫘', 'Rajma 🫘', 'Kadhi 🥛', 'Raita 🥛', 'Pickle 🥒', 'Papad 🍞', 'Lassi 🥛',
  'Mango Lassi 🥭', 'Kulfi 🍨', 'Gulab Jamun 🍯', 'Rasgulla 🍯', 'Jalebi 🍯', 'Kheer 🍚', 'Halwa 🍯',
  
  // Middle Eastern Cuisine
  'Kebab 🥙', 'Shawarma 🥙', 'Falafel 🧆', 'Hummus 🫘', 'Baba Ganoush 🍆', 'Tabbouleh 🥗', 'Fattoush 🥗',
  'Pita Bread 🍞', 'Lavash 🍞', 'Manakish 🍞', 'Labneh 🧀', 'Tahini 🥜', 'Halloumi 🧀', 'Dolma 🍃',
  'Stuffed Grape Leaves 🍃', 'Kibbeh 🥩', 'Kofta 🥩', 'Moroccan Tagine 🍲', 'Couscous 🍚', 'Pilaf 🍚',
  'Turkish Delight 🍯', 'Baklava 🍯', 'Kunafa 🍯', 'Musakhan 🐔', 'Mansaf 🐑', 'Ouzi 🐑', 'Makloubeh 🍚',
  'Persian Rice 🍚', 'Saffron Rice 🍚', 'Jeweled Rice 🍚', 'Fesenjan 🐔', 'Ghormeh Sabzi 🥬', 'Kabsa 🍚',
  
  // French Cuisine
  'Croissant 🥐', 'Pain au Chocolat 🥐', 'Baguette 🥖', 'French Toast 🍞', 'Croque Monsieur 🥪',
  'Croque Madame 🥪', 'Quiche 🥧', 'Soufflé 🍰', 'Ratatouille 🍆', 'Bouillabaisse 🍲', 'French Onion Soup 🧅',
  'Coq au Vin 🐔', 'Beef Bourguignon 🥩', 'Duck Confit 🦆', 'Foie Gras 🦢', 'Escargot 🐌', 'Steak Frites 🥩',
  'Cassoulet 🫘', 'Pot-au-Feu 🍲', 'Blanquette de Veau 🐄', 'Boeuf Stroganoff 🥩', 'Nicoise Salad 🥗',
  'French Cheese 🧀', 'Brie 🧀', 'Camembert 🧀', 'Roquefort 🧀', 'Comté 🧀', 'Gruyère 🧀', 'Chèvre 🧀',
  'Macarons 🍪', 'Éclairs 🍰', 'Profiteroles 🍰', 'Crème Brûlée 🍮', 'Tarte Tatin 🍎', 'Mille-feuille 🍰',
  'Mousse au Chocolat 🍫', 'Clafoutis 🍒', 'Madeleines 🍪', 'Canelés 🍰', 'Paris-Brest 🍰', 'Opéra 🍰',
  
  // Seafood
  'Salmon 🐟', 'Tuna 🐟', 'Cod 🐟', 'Halibut 🐟', 'Sea Bass 🐟', 'Snapper 🐟', 'Mahi Mahi 🐟', 'Sole 🐟',
  'Flounder 🐟', 'Trout 🐟', 'Mackerel 🐟', 'Sardines 🐟', 'Anchovies 🐟', 'Eel 🐟', 'Catfish 🐟',
  'Shrimp 🦐', 'Prawns 🦐', 'Lobster 🦞', 'Crab 🦀', 'Crayfish 🦞', 'Scallops 🐚', 'Oysters 🦪',
  'Mussels 🦪', 'Clams 🦪', 'Abalone 🐚', 'Sea Urchin 🐚', 'Octopus 🐙', 'Squid 🦑', 'Calamari 🦑',
  'Fish and Chips 🐟', 'Fish Tacos 🌮', 'Ceviche 🐟', 'Paella 🥘', 'Cioppino 🍲', 'Gumbo 🍲', 'Jambalaya 🍚',
  'Seafood Bisque 🦞', 'Clam Chowder 🦪', 'Fish Curry 🐟', 'Grilled Fish 🐟', 'Blackened Fish 🐟',
  'Teriyaki Salmon 🐟', 'Lemon Garlic Shrimp 🦐', 'Coconut Shrimp 🦐', 'Tempura 🍤', 'Fish Cakes 🐟'
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

// Function to get random subset of activities
const getRandomActivities = (activities: any[], count: number = 15) => {
  const shuffled = shuffleArray(activities);
  return shuffled.slice(0, count);
};

export const homeActivities = {
  short: () => getRandomActivities(allHomeActivities.slice(0, 80), 15),
  medium: () => getRandomActivities(allHomeActivities.slice(40, 120), 15),
  long: () => getRandomActivities(allHomeActivities.slice(80), 15),
};

export const outsideActivities = {
  short: () => getRandomActivities(allOutsideActivities.slice(0, 80), 15),
  medium: () => getRandomActivities(allOutsideActivities.slice(40, 120), 15),
  long: () => getRandomActivities(allOutsideActivities.slice(80), 15),
};

export const netflixOptions = [
  'Horror 👻', 'Komedia 😂', 'Romans 💕', 'Akcja 💥', 'Dramat 🎭',
  'Sci-Fi 🚀', 'Thriller 😱', 'Dokumentalne 📹', 'Anime 🍜', 'Serial 📺',
  'Fantasy 🧙‍♂️', 'Kryminalny 🔍', 'Historyczny 🏰', 'Biograficzny 👤', 'Muzyczny 🎵',
  'Familijny 👨‍👩‍👧‍👦', 'Przygodowy 🗺️', 'Western 🤠', 'Wojenny ⚔️', 'Sportowy ⚽'
];

export const musicOptions = [
  'Taniec 💃', 'Karaoke 🎤', 'Słuchanie razem 🎧', 'Tworzenie playlisty 📝',
  'Odkrywanie nowej muzyki 🔍', 'Koncert online 🎤', 'Nauka gry na instrumencie 🎸',
  'Freestyle rap 🎤', 'Analiza tekstów 📝', 'Historia muzyki 📚', 'Muzykoterapia 🎵',
  'Tworzenie bitów 🎛️', 'Singing challenge 🎤', 'Muzyka relaksacyjna 🧘‍♀️', 'Disco party 🕺'
];

export const cookingOptions = [
  'Włoskie 🇮🇹', 'Azjatyckie 🥢', 'Meksykańskie 🌮', 'Francuskie 🥖', 'Indyjskie 🍛',
  'Desery 🍰', 'Zdrowe jedzenie 🥗', 'Fast food 🍔', 'Eksperymentalne 🧪', 'Wegańskie 🌱',
  'Śródziemnomorskie 🫒', 'Fusion 🌍', 'Comfort food 🍲', 'Street food 🌮', 'Gourmet 🥂',
  'Bezglutenowe 🌾', 'Sezonowe 🍂', 'Lokalne 🏠', 'Międzynarodowe 🌏', 'Tradycyjne 👵'
];

export const gameOptions = [
  'Gry kooperacyjne 🤝', 'Gry konkurencyjne ⚔️', 'Puzzle 🧩', 'RPG 🗡️', 'Strategiczne ♟️',
  'Gry retro 👾', 'Mobilne 📱', 'VR 🥽', 'Planszowe 🎲', 'Karciane 🃏',
  'Party games 🎉', 'Trivia 🧠', 'Słowne 💬', 'Logiczne 🔍', 'Kreatywne 🎨',
  'Sportowe ⚽', 'Symulacyjne 🚗', 'Przygodowe 🗺️', 'Horror 👻', 'Edukacyjne 📚'
];
