import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Search from "./pages/Search/index";
import Help from "./pages/Help/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}

export default App;
