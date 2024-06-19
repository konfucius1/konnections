import { useState, useRef, useEffect } from 'react';
import { useGameState } from '../../stores/useGameState';

export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

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
