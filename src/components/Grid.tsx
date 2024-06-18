import { Tile } from './tile/Tile';

type GridType = {
  words: string[];
  selectedWords: string[];
  onWordClick: (word: string) => void;
};

export function Grid({ words, selectedWords, onWordClick }: GridType) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {words.map((word) => (
        <Tile
          word={word}
          key={word}
          isSelected={selectedWords.includes(word)}
          onClick={() => onWordClick(word)}
        />
      ))}
    </div>
  );
}
