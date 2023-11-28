import { Routes, Route } from "react-router-dom";
import NotFoundRedirect from "./components/NotFoundRedirect";
import Main from "./pages/Main/Main";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </>
  );
}

export default App;
