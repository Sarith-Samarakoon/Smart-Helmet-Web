import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
    </div>
  );
}

export default App;
