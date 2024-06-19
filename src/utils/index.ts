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
