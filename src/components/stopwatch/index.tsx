import { useRef, useEffect } from 'react';
import { useGameState } from '../../stores/useGameState';
import { formatTime } from '@/utils';

function Stopwatch({
  time,
  setTime,
}: {
  time: number;
  setTime: (time: number) => void;
}) {
  const { gameOver } = useGameState();
  const timerRef = useRef(null);

  useEffect(() => {
    if (!gameOver) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [gameOver, setTime]);

  return (
    <div>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default Stopwatch;
