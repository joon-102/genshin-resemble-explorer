import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import './App.css';
import "./index.css";

import NotFound from "./pages/NotFound";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
