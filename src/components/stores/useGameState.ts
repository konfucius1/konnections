import { create } from 'zustand';

type GameStateType = {
  attempts: number;
  isCorrectAttempt: boolean;
  gameOver: boolean;
  selectedWords: string[];
  decrementAttempt: () => void;
  setCorrectAttempt: (isCorrectAttempt: boolean) => void;
  setGameOver: (gameOver: boolean) => void;
  setSelectedWords: (selectedWords: string[]) => void;
};

export const useGameState = create<GameStateType>((set) => ({
  attempts: 4,
  isCorrectAttempt: false,
  gameOver: false,
  selectedWords: [],
  decrementAttempt: () => set((state) => ({ attempts: state.attempts - 1 })),
  setCorrectAttempt: (isCorrectAttempt) => set({ isCorrectAttempt }),
  setGameOver: (gameOver) => set({ gameOver }),
  setSelectedWords: (selectedWords) => set({ selectedWords }),
}));
