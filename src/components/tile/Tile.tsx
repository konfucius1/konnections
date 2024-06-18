import { useGameState } from '../stores/useGameState';

type TileType = {
  word: string;
  isSelected: boolean;
  onClick: () => void;
};

export function Tile({ word, isSelected, onClick }: TileType) {
  const { isCorrectAttempt, selectedWords } = useGameState();

  if (selectedWords.includes(word)) {
    console.log(`selectedWords ${selectedWords}: ${word}`);
  }

  return (
    <button
      className={`${
        isSelected ? 'bg-blue-400' : 'bg-blue-200'
      } text-zinc-800 px-8 rounded-md py-4 max-w-40 text-lg font-semibold  hover:bg-blue-300 transition ease-in-out delay-25 h-24 items-center flex justify-center`}
      onClick={() => {
        onClick();
        console.log(word);
      }}
    >
      {word}
    </button>
  );
}
