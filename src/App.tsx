import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChordsAndKeysPage from "./pages/ChordsAndKeys";
import ScalesPage from "./pages/Scales";
import ChordsPage from "./pages/Chords";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/scales" element={<ScalesPage />} />
          <Route path="/chords-and-keys" element={<ChordsAndKeysPage />} />
          <Route path="/chords" element={<ChordsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;