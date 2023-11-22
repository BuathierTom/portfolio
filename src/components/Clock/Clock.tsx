"use client";

import React, { useState, useEffect } from "react";

const ClockComponent = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours} : ${minutes}`;
  };

  const [ctime, setTime] = useState(getCurrentTime);

  const updateClock = () => {
    setTime(getCurrentTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="container__clock">
      {ctime}
    </h1>
  );
};

export default ClockComponent;
