import { useState, useEffect, useCallback } from "react";

const useStopWatch = (startTime) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  const stopStopwatch = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  }, [intervalId]);

  useEffect(() => {
    let currentIntervalId;

    if (startTime !== undefined && isRunning) {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));

      currentIntervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      setIntervalId(currentIntervalId);
    }

    return () => {
      if (currentIntervalId) {
        clearInterval(currentIntervalId);
      }
    };
  }, [startTime, isRunning]);

  return {
    totalTime: elapsedTime,
    stopStopwatch,
  };
};

export default useStopWatch;
