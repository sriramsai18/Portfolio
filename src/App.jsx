import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Projects from "./pages/Projects";
import SplashScreen from "./components/SplashScreen";
import "./styles/global.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

