import { categories } from '../data';

export function getCategories() {
  return categories;
}

export function getCategoriesKeys() {
  return Object.keys(categories);
}

export function getCategoryBasedOnArray(words: string[]) {
  const categories = getCategories();
  return Object.keys(categories).find((category) => {
    return categories[category].every((word) => words.includes(word));
  });
}

export function getAllWords() {
  return Object.values(categories).flat();
}

export function formatTime(time: number) {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = parseInt(`${Math.floor(time / 60)}`, 10);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
}

export function shuffleWords(words: string[]) {
  return [...words].sort(() => Math.random() - 0.5);
}
