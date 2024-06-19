import { Grid } from './components/Grid';
import { useGameState } from './stores/useGameState';
import { CorrectTiles } from './components/tile/CorrectTiles';
import { useConnectionsGame } from './hooks/useConnectionsGame';
import Stopwatch, { formatTime } from './components/stopwatch';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/modal';
import { Attempts } from './components/attempts';
import { Button } from './components/ui/button';
import debounce from './hooks/useDebounce';

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
    setGameOver,
  } = useGameState();

  const [gameWon, setGameWon] = useState(false);
  const reachedMaxSelection = selectedWords.length === 4;
  const [openModal, setOpenModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (attempts === 0) {
      setOpenModal(true);
      setGameOver(true);
    } else if (correctWords.length === 4) {
      setGameWon(true);
      setGameOver(true);
      setOpenModal(true);
    }
  }, [attempts, correctWords.length, setGameOver, words.length]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [alert, setAlert] = useState<string>('');

  const handleSubmit = () => {
    const { isCorrect, status } = checkIfSelectionIsCorrect(selectedWords);
    setAlert(status);

    if (isCorrect) {
      // remove the selected words from the grid
      const newWords = words.filter((word) => !selectedWords.includes(word));
      setCorrectWords(selectedWords);
      setWords(newWords);
      setCorrectAttempt(true);
      clearSelectedWords();
    } else {
      if (selectedWords.length !== 4) {
        setAlert('Please select 4 words');
        return;
      }

      decrementAttempt();
      setCorrectAttempt(false);
    }
  };

  const debouncedSubmit = debounce(handleSubmit, 1000);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="animate-wobble text-center text-2xl font-bold">
        {alert ? <h1>{alert}</h1> : <h1>Find the konnections!</h1>}
      </div>

      <Stopwatch time={time} setTime={setTime} />

      <div className="mt-8 flex flex-col gap-2 min-w-full">
        <CorrectTiles correctWordsList={correctWords} />
        <Grid
          words={words}
          selectedWords={selectedWords}
          onWordClick={handleSelectWord}
        />
      </div>

      <div className="flex gap-4 mt-16">
        <Button
          className="bg-blue-200 hover:bg-blue-400 text-foreground"
          onClick={handleShuffle}
        >
          Shuffle
        </Button>

        <Button
          onClick={clearSelectedWords}
          className="bg-yellow-100 hover:bg-yellow-200 text-foreground"
        >
          Clear
        </Button>

        <Button
          variant={reachedMaxSelection ? 'default' : 'secondary'}
          onClick={() => debouncedSubmit()}
        >
          Submit
        </Button>
      </div>

      <Attempts attempts={attempts} />

      <AnimatePresence>
        {openModal && (
          <Modal
            message={gameWon ? 'Congratulations! 🎉' : 'Nice try'}
            onClose={handleCloseModal}
            time={formatTime(time)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
