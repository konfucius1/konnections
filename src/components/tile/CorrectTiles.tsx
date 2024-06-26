import { getCategoryBasedOnArray } from '../../utils';

function CorrectBlock({ words }: { words: string[] }) {
  return (
    <div className="animate-wobble text-center px-8 rounded-md py-4 h-20 bg-green-100 flex flex-col justify-center items-center uppercase">
      <h1 className="font-semibold">{getCategoryBasedOnArray(words)}</h1>
      <p className="text-md">{words.join(', ')}</p>
    </div>
  );
}

export function CorrectTiles({
  correctWordsList,
}: {
  correctWordsList: string[][];
}) {
  return (
    <div className="flex flex-col gap-2">
      {correctWordsList?.map((words, index) => (
        <CorrectBlock key={index} words={words} />
      ))}
    </div>
  );
}
