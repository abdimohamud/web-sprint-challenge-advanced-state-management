import React from 'react';

 const Smurfs = (props) => {
    return (
        <div>
            <h4>{props.smurf.name}</h4>
            <h5>{props.smurf.age}</h5>
            <p>{props.smurf.height}</p>
        </div>
    )

}
export default Smurfs;