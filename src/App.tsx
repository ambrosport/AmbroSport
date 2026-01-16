import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
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
