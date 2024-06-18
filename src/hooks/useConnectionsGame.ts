import { useState } from 'react';
import { Categories, categories } from '../data';

function flattenWords(categories: Categories) {
  return Object.values(categories).flat();
}

function shuffleWords(words: string[]) {
  return words.sort(() => Math.random() - 0.5);
}

export function useConnectionsGame() {
  const [words, setWords] = useState(flattenWords(categories));
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  function handleShuffle() {
    setWords(shuffleWords([...words]));
  }

  function handleSelectWord(word: string) {
    // if (selectedWords.length === 4) return;

    if (selectedWords.includes(word)) {
      setSelectedWords(
        selectedWords.filter((selectedWord) => selectedWord !== word),
      );
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  }

  function clearSelectedWords() {
    setSelectedWords([]);
  }

  function arrayContainsAllElements(arr: string[], target: string[]): boolean {
    return target.every((element) => arr.includes(element));
  }

  function checkIfSelectionIsCorrect(target: string[]): boolean {
    const arrayOfArrays = Object.values(categories);
    return arrayOfArrays.some(
      (array) =>
        arrayContainsAllElements(array, target) &&
        array.length === target.length,
    );
  }

  return {
    words,
    setWords,
    selectedWords,
    handleSelectWord,
    handleShuffle,
    clearSelectedWords,
    checkIfSelectionIsCorrect,
  };
}
