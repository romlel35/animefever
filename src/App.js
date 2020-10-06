import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
     
   
<Header/>  
 <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
