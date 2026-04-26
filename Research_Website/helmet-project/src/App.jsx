import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Domain from './Pages/Domain';
import Milestones from './Pages/Milestones';
import Documents from './Pages/Documents';
import Presentations from './Pages/Presentations';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
