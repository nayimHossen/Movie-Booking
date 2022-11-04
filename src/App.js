import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/summery/:id" element={<SummaryPage />} />
      </Routes>
    </>
  );
}

export default App;
