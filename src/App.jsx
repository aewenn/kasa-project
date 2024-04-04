import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutKasa from "./pages/AboutKasa";
import ErrorPage from "./pages/ErrorPage";
import LocationPage from "./pages/LocationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutKasa />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;