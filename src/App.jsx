import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutKasa from "./pages/AboutKasa";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutkasa" element={<AboutKasa />} />
      </Routes>
      <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;