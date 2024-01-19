const TimeDifference = ({ startTimestamp, endTimestamp }) => {
  const calculateDurationAndFormat = (startTimestamp, endTimestamp) => {
    const durationInMilliseconds = endTimestamp - startTimestamp;
    return formatMilliseconds(durationInMilliseconds);
  };

  const formatMilliseconds = (durationInMilliseconds) => {
    const seconds = Math.floor((durationInMilliseconds / 1000) % 60);
    const minutes = Math.floor((durationInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((durationInMilliseconds / (1000 * 60 * 60)) % 24);

    const formattedTime = [];
    if (hours > 0) {
      formattedTime.push(`${hours} hr`);
    }
    if (minutes > 0) {
      formattedTime.push(`${minutes} min`);
    }
    if (seconds > 0 || formattedTime.length === 0) {
      formattedTime.push(`${seconds} sec`);
    }

    return formattedTime.join(" ");
  };

  const formattedDuration = calculateDurationAndFormat(
    startTimestamp,
    endTimestamp
  );

  return <span>{formattedDuration}</span>;
};

export default TimeDifference;
