import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import "./index.css";

import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
