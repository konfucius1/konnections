import { categories } from '../data';
import { Tile } from './tile/Tile';

export function Connections() {
  const allWords = Object.values(categories).flat();

  return (
    <div className="grid grid-cols-4 gap-2">
      {allWords.map((word) => (
        <Tile word={word} key={word} />
      ))}
    </div>
  );
}
