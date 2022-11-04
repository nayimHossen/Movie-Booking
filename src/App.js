import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/shared/Navbar";
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/summery/:id" element={<SummaryPage />} />
      </Routes>
    </>
  );
}

export default App;
