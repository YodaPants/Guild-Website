import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { About } from './pages/About';
import { SignUp } from './pages/SignUp';
import Footer from './components/Footer';
import { History } from './pages/History';
import { RaidRoster } from './pages/RaidRoster';
import { HamburgerNav } from './components/HamburgerNav';
import ImageSlider from './components/ImageSlider';


function App() {

  

  return (
    <Router>
      <NavBar/>
      <HamburgerNav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
        <Route path="/history" component={History} />
        <Route path="/raidroster" component={RaidRoster} />
        <Route path="/imagetesting" component={ImageSlider} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
