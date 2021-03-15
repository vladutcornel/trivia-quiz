import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Component that renders a countdown in minutes and seconds, until the provided
 *
 * @param {Number} until timestamp when the countdown should reach 0
 * @param {Function} onTimeout Event fired when 0 is reached
 * @returns {JSX.Element}
 * @constructor
 */
function Countdown({ until, onTimeout }) {
  const calculateTimeLeft = () => {
    const diff = until - Date.now();
    const seconds = Math.floor(diff / 1e3);
    const minutes = Math.floor(seconds / 60);

    return {
      diff,
      seconds: seconds % 60,
      minutes: minutes % 60,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      const oldDiff = timeLeft.diff;
      const newTimeLeft = calculateTimeLeft();

      if (oldDiff > 0 && newTimeLeft.diff <= 0) {
        onTimeout();
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1e3);
  });

  if (timeLeft.diff < 0) {
    return (<span />);
  }

  return (
    <>{`${timeLeft.minutes}:${String(timeLeft.seconds).padStart(2, "0")}`}</>
  );
}

Countdown.propTypes = {
  until: PropTypes.number.isRequired,
  onTimeout: PropTypes.func,
};

Countdown.defaultProps = {
  onTimeout: () => {},
};

export default Countdown;
