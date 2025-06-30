
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

// Massive database of home activities (100 items)
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
  
  // Games & Entertainment
  { id: 'board-games', text: 'Gry planszowe', emoji: '🎲' },
  { id: 'card-games', text: 'Gry w karty', emoji: '🃏' },
  { id: 'video-games', text: 'Gry wideo', emoji: '🎮' },
  { id: 'puzzle', text: 'Układanie puzzli', emoji: '🧩' },
  { id: 'trivia', text: 'Quiz wiedzy', emoji: '🧠' },
  { id: 'charades', text: 'Kalambury', emoji: '🎭' },
  { id: 'riddles', text: 'Zagadki', emoji: '🤔' },
  { id: 'crossword', text: 'Krzyżówki', emoji: '📝' },
  { id: 'chess', text: 'Szachy', emoji: '♟️' },
  { id: 'uno', text: 'UNO', emoji: '🎨' },
  
  // Creative Activities
  { id: 'drawing', text: 'Rysowanie razem', emoji: '🎨' },
  { id: 'painting', text: 'Malowanie obrazów', emoji: '🖼️' },
  { id: 'crafting', text: 'Robótki ręczne', emoji: '✂️' },
  { id: 'origami', text: 'Origami', emoji: '🦢' },
  { id: 'scrapbooking', text: 'Scrapbooking', emoji: '📔' },
  { id: 'pottery', text: 'Ceramika', emoji: '🏺' },
  { id: 'jewelry', text: 'Robienie biżuterii', emoji: '💍' },
  { id: 'candles', text: 'Świece domowe', emoji: '🕯️' },
  { id: 'knitting', text: 'Szydełkowanie', emoji: '🧶' },
  { id: 'photography', text: 'Sesja zdjęciowa', emoji: '📷' },
  
  // Wellness & Self-care
  { id: 'meditation', text: 'Medytacja', emoji: '🧘‍♀️' },
  { id: 'yoga', text: 'Joga domowa', emoji: '🧘‍♂️' },
  { id: 'stretching', text: 'Rozciąganie', emoji: '🤸‍♀️' },
  { id: 'home-spa', text: 'Domowe SPA', emoji: '🛁' },
  { id: 'face-masks', text: 'Maseczki na twarz', emoji: '🧴' },
  { id: 'manicure', text: 'Manicure', emoji: '💅' },
  { id: 'massage', text: 'Masaż', emoji: '💆‍♀️' },
  { id: 'aromatherapy', text: 'Aromaterapia', emoji: '🌸' },
  { id: 'journaling', text: 'Pisanie dziennika', emoji: '📓' },
  { id: 'reading', text: 'Czytanie książek', emoji: '📚' },
  
  // Learning & Development
  { id: 'language-learning', text: 'Nauka języka', emoji: '📖' },
  { id: 'online-courses', text: 'Kursy online', emoji: '💻' },
  { id: 'skill-learning', text: 'Nowa umiejętność', emoji: '🎯' },
  { id: 'instrument', text: 'Nauka gry na instrumencie', emoji: '🎸' },
  { id: 'coding', text: 'Programowanie', emoji: '💻' },
  { id: 'writing', text: 'Pisanie opowiadań', emoji: '✍️' },
  { id: 'blogging', text: 'Prowadzenie bloga', emoji: '💻' },
  { id: 'history', text: 'Historia', emoji: '📜' },
  { id: 'astronomy', text: 'Astronomia', emoji: '🌟' },
  { id: 'philosophy', text: 'Filozofia', emoji: '🤔' },
  
  // Organization & Productivity
  { id: 'cleaning', text: 'Sprzątanie z muzyką', emoji: '🧹' },
  { id: 'organizing', text: 'Organizowanie szaf', emoji: '👗' },
  { id: 'decluttering', text: 'Uporządkowanie', emoji: '📦' },
  { id: 'planning', text: 'Planowanie przyszłości', emoji: '📅' },
  { id: 'budgeting', text: 'Planowanie budżetu', emoji: '💰' },
  { id: 'goal-setting', text: 'Wyznaczanie celów', emoji: '🎯' },
  { id: 'meal-planning', text: 'Planowanie posiłków', emoji: '🍽️' },
  { id: 'digital-cleanup', text: 'Porządki cyfrowe', emoji: '💻' },
  { id: 'photo-organization', text: 'Organizacja zdjęć', emoji: '📸' },
  { id: 'contact-cleanup', text: 'Porządki w kontaktach', emoji: '📞' },
  
  // Hobbies & Interests
  { id: 'gardening', text: 'Ogrodnictwo domowe', emoji: '🌱' },
  { id: 'herb-garden', text: 'Ogródek ziołowy', emoji: '🌿' },
  { id: 'succulent-care', text: 'Opieka nad sukulentami', emoji: '🌵' },
  { id: 'flower-arranging', text: 'Aranżacja kwiatów', emoji: '💐' },
  { id: 'terrariums', text: 'Terraria', emoji: '🌿' },
  { id: 'aquarium', text: 'Akwarium', emoji: '🐠' },
  { id: 'bird-watching', text: 'Obserwacja ptaków', emoji: '🦅' },
  { id: 'model-building', text: 'Budowanie modeli', emoji: '🏗️' },
  { id: 'magic-tricks', text: 'Sztuczki magiczne', emoji: '🎩' },
  { id: 'juggling', text: 'Żonglerka', emoji: '🤹‍♀️' },
  
  // Fun & Entertainment
  { id: 'truth-or-dare', text: 'Prawda czy wyzwanie', emoji: '💭' },
  { id: 'storytelling', text: 'Opowiadanie historii', emoji: '📖' },
  { id: 'memory-games', text: 'Gry pamięciowe', emoji: '🧠' },
  { id: 'word-games', text: 'Gry słowne', emoji: '💬' },
  { id: 'improv', text: 'Improwizacja teatralna', emoji: '🎭' },
  { id: 'mime', text: 'Pantomima', emoji: '🎭' },
  { id: 'puppet-shows', text: 'Teatr lalek', emoji: '🎪' },
  { id: 'shadow-puppets', text: 'Teatr cieni', emoji: '👥' },
  { id: 'fashion-show', text: 'Pokaz mody', emoji: '👗' },
  { id: 'talent-show', text: 'Pokaz talentów', emoji: '🎤' },
  
  // Romance & Connection
  { id: 'love-letters', text: 'Pisanie listów miłosnych', emoji: '💌' },
  { id: 'couple-massage', text: 'Masaż dla par', emoji: '💆‍♀️' },
  { id: 'romantic-dinner', text: 'Romantyczna kolacja', emoji: '🕯️' },
  { id: 'stargazing', text: 'Patrzenie na gwiazdy', emoji: '⭐' },
  { id: 'slow-dancing', text: 'Powolny taniec', emoji: '💃' },
  { id: 'couple-goals', text: 'Planowanie wspólnych celów', emoji: '💕' },
  { id: 'memory-lane', text: 'Wspominanie początków', emoji: '📸' },
  { id: 'future-dreams', text: 'Marzenia o przyszłości', emoji: '🌈' },
  { id: 'gratitude-practice', text: 'Praktyka wdzięczności', emoji: '🙏' },
  { id: 'couple-meditation', text: 'Medytacja dla par', emoji: '🧘‍♀️' }
];

// Massive database of outside activities (100 items)
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
  { id: 'garden', text: 'Ogród botaniczny', emoji: '🌺' },
  { id: 'nature-reserve', text: 'Rezerwat przyrody', emoji: '🦅' },
  { id: 'national-park', text: 'Park narodowy', emoji: '🏞️' },
  { id: 'wildlife-park', text: 'Park dzikich zwierząt', emoji: '🦌' },
  { id: 'flower-fields', text: 'Pola kwiatów', emoji: '🌷' },
  
  // Sports & Activities
  { id: 'bike-ride', text: 'Jazda na rowerze', emoji: '🚴‍♀️' },
  { id: 'rollerblading', text: 'Rolki', emoji: '🛼' },
  { id: 'skateboarding', text: 'Deskorolka', emoji: '🛹' },
  { id: 'jogging', text: 'Jogging', emoji: '🏃‍♀️' },
  { id: 'running', text: 'Bieganie', emoji: '🏃‍♂️' },
  { id: 'swimming', text: 'Pływanie', emoji: '🏊‍♀️' },
  { id: 'kayaking', text: 'Kajaki', emoji: '🛶' },
  { id: 'fishing', text: 'Wędkarstwo', emoji: '🎣' },
  { id: 'rock-climbing', text: 'Wspinaczka', emoji: '🧗‍♀️' },
  { id: 'tennis', text: 'Tenis', emoji: '🎾' },
  { id: 'badminton', text: 'Badminton', emoji: '🏸' },
  { id: 'volleyball', text: 'Siatkówka', emoji: '🏐' },
  { id: 'basketball', text: 'Koszykówka', emoji: '🏀' },
  { id: 'football', text: 'Piłka nożna', emoji: '⚽' },
  { id: 'frisbee', text: 'Frisbee', emoji: '🥏' },
  { id: 'mini-golf', text: 'Mini golf', emoji: '⛳' },
  { id: 'golf', text: 'Golf', emoji: '🏌️‍♀️' },
  { id: 'archery', text: 'Łucznictwo', emoji: '🏹' },
  { id: 'bowling', text: 'Kręgle', emoji: '🎳' },
  { id: 'ice-skating', text: 'Łyżwy', emoji: '⛸️' },
  
  // Culture & Entertainment
  { id: 'museum', text: 'Muzeum', emoji: '🏛️' },
  { id: 'art-gallery', text: 'Galeria sztuki', emoji: '🎨' },
  { id: 'theater', text: 'Teatr', emoji: '🎭' },
  { id: 'concert', text: 'Koncert', emoji: '🎤' },
  { id: 'festival', text: 'Festiwal', emoji: '🎪' },
  { id: 'cinema', text: 'Kino', emoji: '🎬' },
  { id: 'outdoor-cinema', text: 'Kino plenerowe', emoji: '🌟' },
  { id: 'comedy-show', text: 'Stand-up', emoji: '😂' },
  { id: 'street-performance', text: 'Występy uliczne', emoji: '🎭' },
  { id: 'karaoke-bar', text: 'Karaoke bar', emoji: '🎤' },
  
  // Shopping & Markets
  { id: 'shopping-mall', text: 'Centrum handlowe', emoji: '🛍️' },
  { id: 'vintage-shops', text: 'Sklepy vintage', emoji: '👗' },
  { id: 'bookstores', text: 'Księgarnie', emoji: '📚' },
  { id: 'farmers-market', text: 'Targ rolniczy', emoji: '🥕' },
  { id: 'flea-market', text: 'Pchli targ', emoji: '🏪' },
  { id: 'craft-fair', text: 'Targi rękodzieła', emoji: '🎨' },
  { id: 'flower-market', text: 'Targ kwiatowy', emoji: '🌸' },
  { id: 'art-market', text: 'Targ sztuki', emoji: '🖼️' },
  { id: 'local-boutiques', text: 'Lokalne butiki', emoji: '👗' },
  { id: 'antique-shops', text: 'Sklepy z antykami', emoji: '🏺' },
  
  // Food & Dining
  { id: 'restaurant', text: 'Restauracja', emoji: '🍽️' },
  { id: 'cafe', text: 'Kawiarnia', emoji: '☕' },
  { id: 'ice-cream-shop', text: 'Lodziarnia', emoji: '🍦' },
  { id: 'food-truck', text: 'Food truck', emoji: '🚚' },
  { id: 'street-food', text: 'Jedzenie uliczne', emoji: '🌮' },
  { id: 'brunch', text: 'Brunch', emoji: '🥞' },
  { id: 'wine-bar', text: 'Winiarnia', emoji: '🍷' },
  { id: 'brewery', text: 'Browar', emoji: '🍺' },
  { id: 'food-festival', text: 'Festiwal jedzenia', emoji: '🎉' },
  { id: 'picnic', text: 'Piknik', emoji: '🧺' },
  
  // Adventures & Experiences
  { id: 'escape-room', text: 'Escape room', emoji: '🗝️' },
  { id: 'amusement-park', text: 'Park rozrywki', emoji: '🎢' },
  { id: 'zoo', text: 'Zoo', emoji: '🦁' },
  { id: 'aquarium', text: 'Akwarium', emoji: '🐠' },
  { id: 'planetarium', text: 'Planetarium', emoji: '🌌' },
  { id: 'botanical-garden', text: 'Ogród botaniczny', emoji: '🌺' },
  { id: 'trampoline-park', text: 'Park trampolin', emoji: '🤸‍♀️' },
  { id: 'laser-tag', text: 'Laser tag', emoji: '🔫' },
  { id: 'go-karts', text: 'Gokarty', emoji: '🏎️' },
  { id: 'paintball', text: 'Paintball', emoji: '🎯' },
  
  // Seasonal Activities
  { id: 'sledding', text: 'Sanki', emoji: '🛷' },
  { id: 'skiing', text: 'Narty', emoji: '🎿' },
  { id: 'snowboarding', text: 'Snowboard', emoji: '🏂' },
  { id: 'beach-volleyball', text: 'Siatkówka plażowa', emoji: '🏐' },
  { id: 'surfing', text: 'Surfing', emoji: '🏄‍♀️' },
  { id: 'camping', text: 'Kemping', emoji: '⛺' },
  { id: 'barbecue', text: 'Grill', emoji: '🔥' },
  { id: 'stargazing', text: 'Patrzenie na gwiazdy', emoji: '⭐' },
  { id: 'sunrise-watching', text: 'Podziwianie wschodu słońca', emoji: '🌅' },
  { id: 'sunset-watching', text: 'Podziwianie zachodu słońca', emoji: '🌇' },
  
  // Urban Exploration
  { id: 'city-tour', text: 'Zwiedzanie miasta', emoji: '🏙️' },
  { id: 'architecture-walk', text: 'Spacer architektoniczny', emoji: '🏛️' },
  { id: 'street-art-tour', text: 'Tour street art', emoji: '🎨' },
  { id: 'historic-district', text: 'Dzielnica historyczna', emoji: '🏰' },
  { id: 'rooftop-bars', text: 'Bary na dachach', emoji: '🌃' },
  { id: 'night-market', text: 'Nocny targ', emoji: '🌙' },
  { id: 'observation-deck', text: 'Taras widokowy', emoji: '🌆' },
  { id: 'ferry-ride', text: 'Rejs promem', emoji: '⛴️' },
  { id: 'bike-tour', text: 'Wycieczka rowerowa', emoji: '🚴‍♀️' },
  { id: 'walking-tour', text: 'Spacer z przewodnikiem', emoji: '🚶‍♀️' }
];

// Drinks database (100 items)
export const drinks = [
  'Kawę ☕', 'Herbatę 🍵', 'Wodę 💧', 'Colę 🥤', 'Sprite 💚', 'Fanta 🍊', 'Pepsi 🥤',
  'Dr Pepper 🟤', 'Mountain Dew 🟢', 'Red Bull 🔴', 'Monster 👹', 'Rockstar ⭐', 'Gatorade ⚡',
  'Bubble Tea 🧋', 'Matcha 🍵', 'Chai Latte 🧡', 'Cappuccino ☕', 'Latte 🤎', 'Americano ⚫',
  'Frappé ❄️', 'Smoothie 🥤', 'Milkshake 🥛', 'Hot Chocolate 🍫', 'Iced Tea 🧊', 'Lemonade 🍋',
  'Orange Juice 🍊', 'Apple Juice 🍎', 'Cranberry Juice 🍇', 'Pineapple Juice 🍍', 'Mango Juice 🥭',
  'Coconut Water 🥥', 'Almond Milk 🌰', 'Soy Milk 🌱', 'Oat Milk 🌾', 'Rice Milk 🍚',
  'Kombucha 🍄', 'Kefir 🥛', 'Protein Shake 💪', 'Green Juice 🥬', 'Beetroot Juice 🟣',
  'Carrot Juice 🥕', 'Celery Juice 🥬', 'Ginger Shot 🫚', 'Wheatgrass Shot 🌱', 'Turmeric Latte 🌟',
  'Golden Milk 🥛', 'Horchata 🥛', 'Lassi 🥛', 'Mango Lassi 🥭', 'Rose Milk 🌹',
  'Taro Milk Tea 🟣', 'Thai Iced Tea 🧡', 'Vietnamese Coffee 🇻🇳', 'Turkish Coffee 🇹🇷', 'Greek Coffee 🇬🇷',
  'Espresso ☕', 'Macchiato 🤍', 'Mocha 🍫', 'Irish Coffee ☕', 'Affogato ☕',
  'Cold Brew ❄️', 'Nitro Coffee 💨', 'Bulletproof Coffee ☕', 'Dalgona Coffee ☕', 'Flat White ⚪',
  'Cortado ☕', 'Gibraltar ☕', 'Long Black ⚫', 'Piccolo Latte ☕', 'Magic Coffee ✨',
  'Sparkling Water 💧', 'Tonic Water 💧', 'Soda Water 💧', 'Flavored Water 💧', 'Vitamin Water 💧',
  'Energy Drink ⚡', 'Sports Drink ⚡', 'Electrolyte Water 💧', 'Alkaline Water 💧', 'Hydrogen Water 💧'
];

// Foods database (100 items)
export const foods = [
  'Sushi 🍣', 'Pizza 🍕', 'Burger 🍔', 'Pasta 🍝', 'Ramen 🍜', 'Tacos 🌮', 'Sandwich 🥪',
  'Salad 🥗', 'Soup 🍲', 'Steak 🥩', 'Chicken 🐔', 'Fish 🐟', 'Shrimp 🦐', 'Lobster 🦞',
  'Rice 🍚', 'Noodles 🍜', 'Dumplings 🥟', 'Spring Rolls 🌯', 'Fried Rice 🍚', 'Pad Thai 🍝',
  'Curry 🍛', 'Biryani 🍚', 'Kebab 🥙', 'Falafel 🧆', 'Hummus 🫘', 'Pita 🍞', 'Bagel 🥯',
  'Croissant 🥐', 'Pancakes 🥞', 'Waffles 🧇', 'French Toast 🍞', 'Omelette 🍳', 'Eggs Benedict 🍳',
  'Avocado Toast 🥑', 'Cereal 🥣', 'Granola 🥣', 'Yogurt 🥛', 'Smoothie Bowl 🍓', 'Acai Bowl 🍇',
  'Ice Cream 🍨', 'Gelato 🍨', 'Sorbet 🍧', 'Frozen Yogurt 🍦', 'Cake 🍰', 'Cupcake 🧁',
  'Cookies 🍪', 'Brownies 🍫', 'Donuts 🍩', 'Muffins 🧁', 'Pie 🥧', 'Cheesecake 🍰',
  'Chocolate 🍫', 'Candy 🍬', 'Gummy Bears 🐻', 'Lollipop 🍭', 'Cotton Candy 🍭', 'Popcorn 🍿',
  'Nachos 🧀', 'Chips 🍟', 'Pretzels 🥨', 'Nuts 🥜', 'Trail Mix 🥜', 'Granola Bar 🍫',
  'Fruit Salad 🍓', 'Apple 🍎', 'Banana 🍌', 'Orange 🍊', 'Grapes 🍇', 'Berries 🫐',
  'Mango 🥭', 'Pineapple 🍍', 'Watermelon 🍉', 'Kiwi 🥝', 'Coconut 🥥', 'Avocado 🥑',
  'Vegetables 🥕', 'Broccoli 🥦', 'Spinach 🥬', 'Kale 🥬', 'Lettuce 🥬', 'Tomato 🍅',
  'Cucumber 🥒', 'Bell Pepper 🫑', 'Onion 🧅', 'Garlic 🧄', 'Mushrooms 🍄', 'Corn 🌽',
  'Potatoes 🥔', 'Sweet Potato 🍠', 'Beans 🫘', 'Lentils 🫘', 'Quinoa 🌾', 'Oats 🌾'
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
  short: () => getRandomActivities(allHomeActivities.slice(0, 40), 15),
  medium: () => getRandomActivities(allHomeActivities.slice(20, 80), 15),
  long: () => getRandomActivities(allHomeActivities.slice(40), 15),
};

export const outsideActivities = {
  short: () => getRandomActivities(allOutsideActivities.slice(0, 40), 15),
  medium: () => getRandomActivities(allOutsideActivities.slice(20, 80), 15),
  long: () => getRandomActivities(allOutsideActivities.slice(40), 15),
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
