import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import HandT from './Components/HandT';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

function App() {
  return (
    <div >
      <Route path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/HandT">
        <HandT />
      </Route>
    </div>
  );
}

export default App;
