import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import ServicesPage from "./views/ServicesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
