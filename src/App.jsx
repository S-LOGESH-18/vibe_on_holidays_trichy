import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, ScrollToTop } from './components';
import {
  About,
  Booking,
  Contact,
  DestinationDetails,
  Destinations,
  Gallery,
  Home,
  NotFound,
} from './pages';
import './styles.css';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
