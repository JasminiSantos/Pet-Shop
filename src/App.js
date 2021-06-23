import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import Home from "./pages/Home";
import SignIn from './pages/signin';
import PageImages from './pages/pageImages';
import PageVideos from './pages/pageVideos';
import PageFree from './pages/pageFree';
import RegisterPage from './pages/signup/index';
import Modal from './components/Navbar/modal';


function App() {


  return (
    <>
    <Router>
    <Switch>
      <Route path='/' component={Home} exact/>  
      <Route path='/page1' component={PageImages}/>
      <Route path='/page2' component={PageVideos}/>
      <Route path='/$2y$10$9X8pPTBkA4Ss6E1SH3GEMOt5Z98WtLD27aMn8CNw1rK'component={PageFree}/>
      <Route path='/signin' component={SignIn} />
      <Route path='/register'  component={RegisterPage}/>
      <Route path='/modal'  component={Modal}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
