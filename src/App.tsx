import { Grid } from './components/Grid';
import { useGameState } from './stores/useGameState';
import { CorrectTiles } from './components/tile/CorrectTiles';
import { useConnectionsGame } from './hooks/useConnectionsGame';
import Stopwatch, { formatTime } from './components/stopwatch';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './components/modal';
import { Attempts } from './components/attempts';
import { Button } from './components/ui/button';

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

  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence>
        {openModal && (
          <motion.div>
            <motion.h5>Game over</motion.h5>
            <motion.h2>Nice try!</motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

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

      <Stopwatch time={time} setTime={setTime} />

      <CorrectTiles correctWordsList={correctWords} />

      <Grid
        words={words}
        selectedWords={selectedWords}
        onWordClick={handleSelectWord}
      />
      <div className="flex gap-2">
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
            }, 500);
          }}
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
