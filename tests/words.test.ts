import { getAllWords, shuffleWords } from '../src/utils/index';
import { describe, it, expect } from 'vitest';

describe('shuffleWords', () => {
  it('should shuffle the words', () => {
    const words = getAllWords();
    const shuffledWords = shuffleWords(words);

    // Check that all original words are still present
    expect(shuffledWords).toEqual(expect.arrayContaining(words));

    // Check that the order has changed
    expect(shuffledWords).not.toEqual(words);
  });

  it('should handle an empty array', () => {
    const words = [];
    const shuffledWords = shuffleWords(words);

    expect(shuffledWords).toEqual([]);
  });
});
