import { Grid } from './components/Grid';
import { useGameState } from './stores/useGameState';
import { CorrectTiles } from './components/tile/CorrectTiles';
import { useConnectionsGame } from './hooks/useConnectionsGame';
import Stopwatch from './components/stopwatch';
import { useState } from 'react';

function App() {
  const {
    handleSelectWord,
    handleShuffle,
    clearSelectedWords,
    checkIfSelectionIsCorrect,
  } = useConnectionsGame();

  const {
    words,
    selectedWords,
    decrementAttempt,
    setCorrectAttempt,
    setWords,
    setCorrectWords,
    correctWords,
    attempts,
  } = useGameState();

  const reachedMaxSelection = selectedWords.length === 4;

  const [alert, setAlert] = useState<string>('');

  return (
    <div className="flex flex-col gap-2">
      <div>
        {alert ? (
          <h1 className="animate-wobble text-center text-2xl font-bold">
            {alert}
          </h1>
        ) : (
          <h1 className="animate-wobble text-center text-2xl font-bold">
            Find the konnections!
          </h1>
        )}
      </div>

      <Stopwatch />

      <CorrectTiles words={correctWords} />

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
            setTimeout(() => {
              const { isCorrect, status } =
                checkIfSelectionIsCorrect(selectedWords);
              setAlert(status);

              if (isCorrect) {
                // remove the selected words from the grid
                const newWords = words.filter(
                  (word) => !selectedWords.includes(word),
                );
                setCorrectWords([...correctWords, ...selectedWords]);
                setWords(newWords);
                setCorrectAttempt(true);
                clearSelectedWords();
              } else {
                decrementAttempt();
                setCorrectAttempt(false);
              }
            }, 500);
          }}
        >
          Submit
        </button>
      </div>

      <div className="text-center">
        <h1>Attempts left: {attempts}</h1>
      </div>
    </div>
  );
}

export default App;
