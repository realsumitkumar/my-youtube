import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const primeNumber = useMemo(() => findNthPrime(text), [text]);

  return (
    <div>
      <div
        className={
          "border w-96 h-96 m-2 p-2 " +
          (isDarkTheme
            ? "border-orange-800 bg-orange-400"
            : "border-purple-800 bg-purple-400")
        }
      >
        <input
          className="border border-orange-400 rounded-lg m-2 p-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <div>
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="border border-pink-600 rounded-lg bg-pink-200 w-24 "
          >
            Toggle
          </button>
        </div>
        <div className="font-bold text-xl m-4">
          nth prime no is : {primeNumber}
        </div>
      </div>
    </div>
  );
};

export default Demo;
