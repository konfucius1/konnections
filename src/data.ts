export type Categories = {
  [category: string]: string[];
};

export const categories: Categories = {
  'Favorite activities together': ['Travel', 'Walk', 'Dinner', 'Movie'],
  'Our signature handshake': ['Shake', 'Gang', 'Bump', 'Wrestle'],
  'Our special places': ['Park', 'Beach', 'Bed', 'Garden'],
  'Classic planet cooking routine': ['Wash', 'Dry', 'Salt', 'Pepper'],
};

export const data = [
  {
    category: 'Favorite activities together',
    words: ['Travel', 'Walk', 'Dinner', 'Movie'],
  },
  {
    category: 'Our signature handshake',
    words: ['Shake', 'Gang', 'Bump', 'Wrestle'],
  },
  { category: 'Our special places', words: ['Park', 'Beach', 'Uni', 'Garden'] },
  {
    category: 'Classic planet cooking routine',
    words: ['Wash', 'Dry', 'Salt', 'Pepper'],
  },
];
