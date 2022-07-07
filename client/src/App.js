import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,

} from 'react-router-dom';
import Route from "./Components/Route"
import Sell from './Components/Sell/Sell'
import Buy from './Components/Buy/Buy'
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
     <Router>
      <Route path="/Sell">
       <Sell/>
      </Route>
      <Route path="/Buy">
       <Buy/>
      </Route>
      
      <Route path="/">
       <Home/>
      </Route>
      </Router>
    </div>
  );
}
export default App;
