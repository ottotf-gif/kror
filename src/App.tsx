import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Emergency from './components/Emergency';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { ConsentProvider } from './lib/consent';
import { useReveal } from './lib/useReveal';

function App() {
  useReveal();
  return (
    <ConsentProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Emergency />
        <WhyUs />
        <Reviews />
        <QuoteForm />
      </main>
      <Footer />
      <CookieConsent />
    </ConsentProvider>
  );
}

export default App;
