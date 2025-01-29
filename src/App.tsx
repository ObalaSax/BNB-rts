import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
