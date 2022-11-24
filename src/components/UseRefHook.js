import React, { useState, useRef, useEffect } from "react";

export const UseRefHook = () => {
  const [name, setName] = useState("");
  const inputFocus = useRef();

  function focus() {}

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <>
      <input
        ref={inputFocus}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focus}>Focus</button>
    </>
  );
};
