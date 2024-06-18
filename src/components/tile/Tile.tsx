type TileType = {
  word: string;
  isSelected: boolean;
  onClick: () => void;
};

export function Tile({ word, isSelected, onClick }: TileType) {
  return (
    <button
      className={`bg-blue-${
        isSelected ? 400 : 200
      } text-zinc-800 px-8 rounded-md py-4 max-w-40 text-lg font-semibold hover:bg-blue-300 transition ease-in-out delay-25 h-24 items-center flex justify-center`}
      onClick={onClick}
    >
      {word}
    </button>
  );
}
