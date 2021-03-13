import React, { useState } from "react";
import Header from './Header/Header';

const App: React.FC = () => {
  const [state, setState] = useState(1);
  return (
    <>
      <Header/>
      <main></main>
      <footer></footer>
    </>
  );
};

export default App;
