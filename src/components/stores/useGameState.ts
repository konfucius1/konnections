import { create } from 'zustand';
import { flattenWords } from '../../hooks/useConnectionsGame';
import { categories } from '../../data';

type GameStateType = {
  words: string[];
  attempts: number;
  isCorrectAttempt: boolean;
  gameOver: boolean;
  selectedWords: string[];
  setWords: (words: string[]) => void;
  decrementAttempt: () => void;
  setCorrectAttempt: (isCorrectAttempt: boolean) => void;
  setGameOver: (gameOver: boolean) => void;
  setSelectedWords: (selectedWords: string[]) => void;
};

export const useGameState = create<GameStateType>((set) => ({
  words: flattenWords(categories),
  attempts: 4,
  isCorrectAttempt: false,
  gameOver: false,
  selectedWords: [],
  setWords: (words) => set({ words }),
  decrementAttempt: () => set((state) => ({ attempts: state.attempts - 1 })),
  setCorrectAttempt: (isCorrectAttempt) => set({ isCorrectAttempt }),
  setGameOver: (gameOver) => set({ gameOver }),
  setSelectedWords: (selectedWords) => set({ selectedWords }),
}));
