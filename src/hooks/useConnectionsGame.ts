import { Categories, categories } from '../data';
import { useGameState } from '../stores/useGameState';

export function flattenWords(categories: Categories) {
  return Object.values(categories).flat();
}

function shuffleWords(words: string[]) {
  return words.sort(() => Math.random() - 0.5);
}

export function useConnectionsGame() {
  const { words, setWords, selectedWords, setSelectedWords } = useGameState();

  function handleShuffle() {
    setWords(shuffleWords([...words]));
  }

  function handleSelectWord(word: string) {
    if (selectedWords.includes(word)) {
      setSelectedWords(
        selectedWords.filter((selectedWord) => selectedWord !== word),
      );
    } else {
      if (selectedWords.length === 4) return;
      setSelectedWords([...selectedWords, word]);
    }
  }

  function clearSelectedWords() {
    setSelectedWords([]);
  }

  function arrayContainsAllElements(arr: string[], target: string[]): boolean {
    return target.every((element) => arr.includes(element));
  }

  function checkIfSelectionIsCorrect(target: string[]): {
    isCorrect: boolean;
    status: string;
  } {
    const arrayOfArrays = Object.values(categories);

    for (const array of arrayOfArrays) {
      if (
        arrayContainsAllElements(array, target) &&
        array.length === target.length
      ) {
        return { isCorrect: true, status: 'Whoo!' };
      }

      const missingElements = array.filter(
        (element) => !target.includes(element),
      ).length;
      if (missingElements === 1 && target.length === array.length) {
        return { isCorrect: false, status: 'Close! just one away' };
      }
    }

    return { isCorrect: false, status: 'Incorrect' };
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
