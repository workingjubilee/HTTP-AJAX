import React from 'react';

const Friend = (props) => {
  return <div>
    <h3>Hi, my name is {props.name}</h3>
    <p>My age is {props.age}</p>
    <p>My e-mail is {props.email}</p>
    <p>My ID# is {props.id}</p>
    <button onClick={(event) => props.delete(props.id, event)}>Unfriend {props.name}</button>
  </div>
};

export default Friend;
