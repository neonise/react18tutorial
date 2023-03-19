import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";

const Comp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h4>You clicked {count} times!</h4>
        <button type="button" onClick={handleClick}>
          Click
        </button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp />);
