import React, { useState, useEffect } from "react";

const FunctionalComp = () => {
  const [resouceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resouceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("return response changed");
    };
  }, [resouceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </button>
      <h1>{resouceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default FunctionalComp;
