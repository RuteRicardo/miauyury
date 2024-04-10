import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./Components/layout/NavBar";
import Sozinho from "./Components/BotEasy";
import ComAmigo from "./Components/Button";
// import PagInicial from "./Components/PagInicial";
import PaginaInicial from "./Components/BotaoIni";
import Dificil from "./Components/BotHard";
function App() {
  return (
    <div className="App">
      <Router>
      {/* <PagInicial /> */}
      
        <Routes>
          {/* <Route path="/" element={<PagInicial />} /> */}
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/facil" element={<Sozinho />} />
          <Route path="/amigo" element={<ComAmigo />} />
          <Route path="/hard" element={<Dificil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
