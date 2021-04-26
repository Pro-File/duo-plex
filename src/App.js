import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact>
          <Header/>
          <Login/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
