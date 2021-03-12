import React from "react";
import "../css/app.scss";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <>
      <header className="header">Header</header>
      <main className="main">Main</main>
      <footer >
        <Footer/>
      </footer>

    </>
  );
};

export default App;
