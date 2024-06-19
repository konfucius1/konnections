import { useEffect, useRef } from 'react';
import { useGameState } from '../../stores/useGameState';

type TileType = {
  word: string;
  isSelected: boolean;
  onClick: () => void;
};

export function Tile({ word, isSelected, onClick }: TileType) {
  const { isCorrectAttempt, selectedWords, setCorrectAttempt } = useGameState();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isCorrectAttempt === false && selectedWords.includes(word)) {
      console.log('inside useEffect');
      buttonRef.current?.classList.add('animate-wobble');
      setCorrectAttempt(null);
      // delete class after animation end
      buttonRef.current?.addEventListener('animationend', () => {
        buttonRef.current?.classList.remove('animate-wobble');
      });
    }
  }, [isCorrectAttempt, selectedWords, setCorrectAttempt, word]);

  if (selectedWords.includes(word)) {
    console.log('selectedWords: ', selectedWords);
  }

  return (
    <button
      ref={buttonRef}
      className={`${
        isSelected ? 'bg-blue-400' : 'bg-blue-200'
      } text-zinc-800 px-8 rounded-md py-4 max-w-40 text-lg font-semibold hover:bg-blue-300 transition ease-in-out delay-25 h-24 items-center flex justify-center`}
      onClick={() => {
        onClick();
      }}
    >
      {word}
    </button>
  );
}
