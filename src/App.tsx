import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChordsAndKeysPage from "./pages/ChordsAndKeys";
import ScalesPage from "./pages/Scales";
import ChordsPage from "./pages/Chords";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add your other routes */}
        <Route path="/scales" element={<ScalesPage/>} />
        <Route path="/chordsAndKeys" element={<ChordsAndKeysPage/>} />
        <Route path="/triads" element={<div>Triads Page</div>} />
        <Route path="/chords" element={<ChordsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;