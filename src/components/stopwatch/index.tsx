import { useRef, useEffect } from 'react';
import { useGameState } from '../../stores/useGameState';
import { formatTime } from '@/utils';

function Stopwatch({
  time,
  setTime,
}: {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { gameOver } = useGameState();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!gameOver) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameOver, setTime]);

  return (
    <div>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default Stopwatch;
