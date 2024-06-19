import { create } from 'zustand';
import { flattenWords } from '../hooks/useConnectionsGame';
import { categories } from '../data';

type GameStateType = {
  words: string[];
  correctWords: string[];
  attempts: number;
  isCorrectAttempt: boolean | null;
  gameOver: boolean;
  selectedWords: string[];
  setWords: (words: string[]) => void;
  setCorrectWords: (correctWords: string[]) => void;
  decrementAttempt: () => void;
  setCorrectAttempt: (isCorrectAttempt: boolean | null) => void;
  setGameOver: (gameOver: boolean) => void;
  setSelectedWords: (selectedWords: string[]) => void;
};

export const useGameState = create<GameStateType>((set) => ({
  words: flattenWords(categories),
  correctWords: [],
  attempts: 4,
  isCorrectAttempt: null,
  gameOver: false,
  selectedWords: [],
  setWords: (words) => set({ words }),
  setCorrectWords: (correctWords) => set({ correctWords }),
  decrementAttempt: () => set((state) => ({ attempts: state.attempts - 1 })),
  setCorrectAttempt: (isCorrectAttempt) => set({ isCorrectAttempt }),
  setGameOver: (gameOver) => set({ gameOver }),
  setSelectedWords: (selectedWords) => set({ selectedWords }),
}));
