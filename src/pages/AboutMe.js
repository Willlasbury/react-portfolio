import { useState, useEffect } from "react";

import long from "../components/aboutMes/long/long";
import Short from "../components/aboutMes/Short";

export default function AboutMe() {
  const [showShort, setShowShort] = useState(false);
  const [showLong, setShowLong] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(true);

  const handleShort = () => {
    setShowLong(false);
    setDisplayQuestion(false);
    setShowShort(true);
  };

  const handleLong = () => {
    setShowShort(false);
    setDisplayQuestion(false);
    setShowLong(true);
  };

  const changeDisplayQuestion = () => {
    setDisplayQuestion(true);
    showShort ? setShowShort(false) : setShowLong(false);
  };

  return (
    <>
      <section className="flex grow flex-col ">
        {displayQuestion && (
          <>
            <h2>Do you want the long or the short version?</h2>
            <div className="flex justify-between">
              <button
                className="bg-slate-300 border-slate-400 text-slate-800 border-2 m-2 rounded-md px-3 py-1 hover:bg-cyan-200 hover:shadow-md"
                onClick={handleShort}
              >
                Short
              </button>
              <button
                className="bg-slate-300 border-slate-400 text-slate-800 border-2 m-2 rounded-md px-3 py-1 hover:bg-cyan-200 hover:shadow-md"
                onClick={handleLong}
              >
                Long
              </button>
            </div>
          </>
        )}
      
        {!displayQuestion && (
          <>
            <button onClick={changeDisplayQuestion}>Go Back</button>
          </>
        )}
      
        {showShort && <Short handleRedirect={handleLong} />}
        {showLong && long}
      </section>
      {/* {long} */}
    </>
  );
}
