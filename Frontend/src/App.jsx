import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Swap from "./Components/Swap";
import Token from "./Components/Token";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-gray-900 to-gray-600">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Swap />} />
            <Route path="/token" element={<Token />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
