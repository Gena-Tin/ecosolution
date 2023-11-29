import { Routes, Route } from "react-router-dom";
import NotFoundRedirect from "./components/NotFoundRedirect";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </>
  );
}

export default App;
