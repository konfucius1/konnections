type TileType = {
  word: string;
  selected: boolean;
};

export function Tile({ word, selected }: TileType) {
  return (
    <div className="bg-blue-200  text-zinc-800 px-8 rounded-md py-4 max-w-40 text-lg font-semibold hover:bg-blue-300 transition ease-in-out delay-25 h-24 items-center flex justify-center">
      {word}
    </div>
  );
}
