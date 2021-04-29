

import './App.css';
import {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {checkAuthStatus} from '../src/Redux/auth/authActions';
import { connect } from 'react-redux';
// import SignUp from './Components/SignUp/SignUp';
// import testModal from './Components/TestModal/testModal'

function App({checkAuthStatus, auth}) {
  useEffect(()=>{

    checkAuthStatus();
    
  },[checkAuthStatus])

  return (
    <div className="App">
      <Router>
        <Header/>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        
        <Route path = "/home">
        <Home/>
        </Route>
        <Route path = "/test">
        {/* <SignUp/> */}
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

var actions = ({
  checkAuthStatus
})
var mapState = (state) => ({
  auth: state.auth,
})

export default connect(mapState, actions)(App);
