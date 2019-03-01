import React from 'react';

const Friend = (props) => {
  return (<div>
    <h3>Hi, my name is {props.name}</h3>
    <p>My age is {props.age}</p>
    <p>My e-mail is {props.email}</p>
    <p>My ID# is {props.id}</p>
    <button onClick={() => props.friendDelete(props.id)}>Unfriend {props.name}</button>
    <button onClick={() => props.friendUpdate({...props})}>Update {props.name}</button>
  </div>);
};



// so what I want to do is:
// I want to check a box or click a button
// the box being checked or button being clicked should open up a form which loads these values.
// would like to build this out into a HOC that chooses between "post" and "put" methods
// don't know if I have time?


export default Friend;
