import { Grid } from './components/Grid';
import { useGameState } from './stores/useGameState';
import { CorrectTiles } from './components/tile/CorrectTiles';
import { useConnectionsGame } from './hooks/useConnectionsGame';
import Stopwatch, { formatTime } from './components/stopwatch';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './components/modal';

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
    } else if (correctWords.length === 16) {
      setOpenModal(true);
      setGameWon(true);
      setGameOver(true);
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
