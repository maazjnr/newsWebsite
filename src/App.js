import React from "react";
import Pages from "./pages/pages";
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Home />
        <Pages />
    </BrowserRouter>
    </div>

  );
}

export default App;



