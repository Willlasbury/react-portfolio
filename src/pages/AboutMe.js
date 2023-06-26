import { useState, useEffect } from "react";

import Ask from "../utils/aboutMes/ask";
import long from "../utils/aboutMes/long";
import short from "../utils/aboutMes/short";

export default function AboutMe() {
  const [showShort, setShowShort] = useState(false);
  const [showLong, setShowLong] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleShort = () => {
    setDisplay(!display);
    setShowShort(!showShort);
  };

  const handleLong = () => {
    setDisplay(!display);
    setShowLong(!showLong);
  };

  const changeDisplay = () => {
    setDisplay(!display);
    showShort ? 
    setShowShort(!showShort):
    setShowLong(!showLong)
  };

  return (
    <>
      {!display && (
        <>
          <h2>Do you want the long or the short version?</h2>
          <button onClick={handleShort}>Short</button>
          <button onClick={handleLong}>Long</button>
        </>
      )}

      {display && (
        <>
          <button onClick={changeDisplay}>Change About Me</button>
        </>
      )}

      {showShort && short}
      {showLong && long}
    </>
  );
}
