import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <AboutMe/>
    </div>
  );
}

export default App;
