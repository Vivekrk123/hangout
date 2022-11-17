import React from "react";
import { useState } from "react";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}

export default App;
