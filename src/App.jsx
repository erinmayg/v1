import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
