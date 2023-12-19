import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <AboutMe/>
     <Services/>
     <Portfolio/>
    </div>
  );
}

export default App;
