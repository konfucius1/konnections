import { Grid } from './components/Grid';
import { useConnectionsGame } from './hooks/useConnectionsGame';

function App() {
  const { words, selectedWords, handleSelectWord, handleShuffle } =
    useConnectionsGame();

  return (
    <div className="flex flex-col gap-2">
      <Grid
        words={words}
        selectedWords={selectedWords}
        onWordClick={handleSelectWord}
      />
      <button
        className="py-2 px-4 bg-blue-300 hover:bg-blue:600 rounded-md max-w-fit"
        onClick={handleShuffle}
      >
        Shuffle
      </button>
    </div>
  );
}

export default App;
