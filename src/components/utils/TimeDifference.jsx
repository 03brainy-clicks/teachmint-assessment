const TimeDifference = ({ startTimestamp, endTimestamp }) => {
  // Function to calculate duration and format it
  const calculateDurationAndFormat = (startTimestamp, endTimestamp) => {
    const durationInMilliseconds = endTimestamp - startTimestamp;
    return formatMilliseconds(durationInMilliseconds);
  };

  // Function to format milliseconds into human-readable format
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

  // Calculate and format the duration
  const formattedDuration = calculateDurationAndFormat(
    startTimestamp,
    endTimestamp
  );

  // Render the formatted duration
  return <span>{formattedDuration}</span>;
};

export default TimeDifference;
