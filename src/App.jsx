import React, { useState, useEffect } from 'react';

// import Square from "./components/Square";
import Fretboard from "./components/Fretboard";

import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer); //cleanup function
  }, [count, setCount]);

  return (
    <div> 
      <div>
        Some text here...
      </div>
      <Fretboard frets={12}></Fretboard>
    </div>
  );
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

export default App;
