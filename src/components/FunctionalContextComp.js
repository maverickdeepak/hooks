import React, { useContext } from "react";
import { ThemeContext } from "./ContextHook";

const FunctionalContextComp = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme ? "black" : "grey",
        height: "150px",
        width: "150px",
      }}
    >
      <h1 style={{ color: "yellow", textAlign: "center", fontSize: "30px" }}>
        Hi
      </h1>
    </div>
  );
};

export default FunctionalContextComp;
