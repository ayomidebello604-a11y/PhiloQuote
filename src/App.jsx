import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuoteProvider } from "./context/QuoteContext";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Journal from "./Pages/Journal";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <QuoteProvider>
        <Router>
          <Navbar />
          <main className="min-h-screen bg-black max-w-6xl mx-auto px-4 pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </QuoteProvider>
    </div>
  );
}
export default App;