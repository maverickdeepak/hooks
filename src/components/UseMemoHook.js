import React, { useState, useMemo, useEffect } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const douleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle]);
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevValue) => !prevValue)}>
        Change Theme
      </button>
      <div style={themeStyle}>{douleNumber}</div>
    </div>
  );
};

export default UseMemoHook;
function slowFunction(number) {
  console.log("calling slowFunction");
  for (let i = 0; i <= 10000000; i++) {}
  return number * 2;
}
