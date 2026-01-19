import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setIsLoaded(true);
    window.addEventListener('load', onLoad);

    // Fallback: reveal after 6s in case events don't fire
    const fallback = setTimeout(() => setIsLoaded(true), 6000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        {/* Global Loader */}
        <div className={`absolute inset-0 z-50 flex items-center justify-center bg-white loader-overlay transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-8 border-blue-600 border-t-transparent animate-spin mb-4 shadow-lg" />
            <div className="text-blue-600 font-semibold text-lg">Loading</div>
          </div>
        </div>
        <Navigation />
        {/* spacer to offset the fixed, full-height header */}
        <div aria-hidden className="h-screen" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
