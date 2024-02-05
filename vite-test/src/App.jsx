import "./App.css";
import { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");
  const [tag, setTag] = useState("h1");
  const clickHandler = () => {
    setHeading("Radical Rhinos");
    setTag("h2");
  };

  // Dynamically creating a component using the tag state
  const TagComponent = tag;

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <TagComponent>{heading}</TagComponent>
    </>
  );
};

export default App;
