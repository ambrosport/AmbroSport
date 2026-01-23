import { Route, Switch } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* spacer to offset the fixed, full-height header */}
      <div aria-hidden className="h-screen" />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
