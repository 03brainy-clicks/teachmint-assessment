import React, { useState, useEffect, useCallback } from "react";

const StopWatch = ({ startTime, status }) => {
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

    if (startTime !== undefined && isRunning && status !== "picked") {
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
  }, [startTime, isRunning, status]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <>
      {status !== "picked" ? (
        <span>
          {minutes} min {seconds} sec
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default StopWatch;
