import { expect, test } from 'vitest';
import {
  getAllWords,
  getCategoriesKeys,
  getCategoryBasedOnArray,
} from '../src/utils/index';

test('retrieves the category based given a corresponding array', () => {
  const actual = getCategoryBasedOnArray(['Travel', 'Dinner', 'Walk', 'Movie']);
  const expected = 'Favorite activities together';
  expect(actual).toBe(expected);
});

test('has all the categories keys', () => {
  const actual = getCategoriesKeys();
  const expected = [
    'Favorite activities together',
    'Our signature handshake',
    'Our special places',
    'Classic planet cooking routine',
  ];
  expect(actual).toEqual(expected);
});

test('has four categories', () => {
  const actual = Object.keys(getCategoriesKeys()).length;
  const expected = 4;
  expect(actual).toBe(expected);
});

test('retrieves all the words', () => {
  const actualLength = getAllWords().length;
  const expectedLength = 16;
  expect(actualLength).toBe(expectedLength);
});
