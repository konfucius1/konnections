import { categories } from '../../data';

// function getCategoryFromWord() {
//   const category = categories.find((category) => category.words.includes(word));
//   return category;
// }

export function CorrectTiles({ words }: { words: string[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {words.map((word) => (
        <button
          className={`text-zinc-800 px-8 rounded-md py-4 max-w-40 text-lg font-semibold transition ease-in-out delay-25 h-24 items-center flex justify-center bg-purple-300 `}
        >
          {word}
        </button>
      ))}
    </div>
  );
}
