import React, { useState } from "react";
import {connect} from 'react-redux'
import {getSmurfsData, postSmurfsData} from '../actions'
import Smurfs from './Smurfs'
import "./App.css";

const initialValues = {
  name:'',
  age:0,
  height: '',
} 
 function App (props) {
  const [values, setValues] = useState(initialValues);
  console.log(values)
  
  const fetchIt = e => {
    e.preventDefault();
    props.getSmurfsData();
  };
  

  const handleChanges = (e) => {
    
    setValues({...values,[e.target.name] : e.target.value });
  };

  const handleSubmit = () => {
    
    props.postSmurfsData(values);
  };
  

  
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
        
        
        <input type="text" name="name" value={values.name} onChange={handleChanges} placeholder="name"  />
        <input type="number" name ="age" value={values.age} onChange={handleChanges} placeholder="age"  />
        <input type="text" name ="height" value={values.height} onChange={handleChanges} placeholder="height"  />
        <button onClick={handleSubmit}>Submit</button>
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

export default connect (mapStateToProps, {getSmurfsData, postSmurfsData}) (App);
