import React, { Component, } from "react";
import {connect} from 'react-redux'
import {getSmurfsData} from '../actions'
import Smurfs from './Smurfs'
import "./App.css";
 function App (props) {
  const fetchIt = e => {
    e.preventDefault();
    props.getSmurfsData();
  };
  console.log(props.smurfs)

  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {props.smurfs.map(smurf => (
          <Smurfs key={smurf.id} smurf={smurf} />
        ))}
        {props.error && <p className="error">{props.error}</p>}
        <button onClick={fetchIt}>Fetch Data!</button>
      </div>
    );
  
}
function mapStateToProps (state){
  return {
  smurfs: state.reducersOne.smurfs,
  error: state.reducersOne.error
  };

}

export default connect (mapStateToProps, {getSmurfsData}) (App);
