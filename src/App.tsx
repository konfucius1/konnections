import { useState } from 'react';
import { Grid } from './components/Grid';
import { useConnectionsGame } from './hooks/useConnectionsGame';

function App() {
  const {
    words,
    selectedWords,
    handleSelectWord,
    handleShuffle,
    clearSelectedWords,
    checkIfSelectionIsCorrect,
  } = useConnectionsGame();

  const reachedMaxSelection = selectedWords.length === 4;

  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Grid
        words={words}
        selectedWords={selectedWords}
        onWordClick={handleSelectWord}
      />
      <div className="flex gap-2">
        <button
          className="py-2 px-4 bg-blue-300 hover:bg-blue:600 rounded-md max-w-fit"
          onClick={handleShuffle}
        >
          Shuffle
        </button>

        <button
          className="py-2 px-4 bg-yellow-100"
          onClick={clearSelectedWords}
        >
          Clear
        </button>

        <button
          className={`rounded-md py-2 px-4 ${
            reachedMaxSelection ? `bg-zinc-800` : `bg-zinc-200`
          } ${
            reachedMaxSelection ? 'text-yellow-50' : 'text-zinc-800'
          } hover:bg-zinc-400 hover:text-zinc-900 transition ease-in-out`}
          onClick={() => {
            const result = checkIfSelectionIsCorrect(selectedWords);
            console.log('result: ', result);
            setIsCorrect(result);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
