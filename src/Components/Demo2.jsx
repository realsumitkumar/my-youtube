import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let letX = 0;
  const [letY, setLetY] = useState(0);

  const ref = useRef(0);
  /** not like => ref = 0
   * but rather = {current: 0}
   */

  let i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("printing " + Math.random() * 100);
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, []);

  console.log("rendering....");

  return (
    <div className="border border-green-700 w-96 h-96 m-2 p-2">
      <div className="m-2 p-2">
        <button
          onClick={() => {
            letX = letX + 1;
            console.log("letX=", letX);
          }}
          className="border border-pink-700 rounded-lg bg-pink-500 mx-2 p-1"
        >
          Increase letX
        </button>
        <span>letX= {letX}</span>
      </div>

      <div className="m-2 p-2">
        <button
          onClick={() => {
            setLetY(letY + 1);
            console.log("letY=", letY);
          }}
          className="border border-pink-700 rounded-lg bg-pink-500 mx-2 p-1"
        >
          Increase letY
        </button>
        <span>letY= {letY}</span>
      </div>

      <div className="m-2 p-2">
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}
          className="border border-pink-700 rounded-lg bg-pink-500 mx-2 p-1"
        >
          Increase ref
        </button>
        <span>ref= {ref.current}</span>
      </div>

      <button
        onClick={() => clearInterval(i.current)}
        className="border border-red-500 rounded-lg m-2 p-2 font-bold"
      >
        Stop
      </button>
    </div>
  );
};

export default Demo2;
