import React, { useState, useEffect } from "react";
import "./timer.css"

const Timer = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    let timer=setInterval(() => setCnt((prev) => prev + 1), 2000);
    return ()=>{
        clearInterval(timer)
    }
  }, []);

  return (
    <div>
      <p>{cnt}</p>
    </div>
  );
};

export default Timer;
