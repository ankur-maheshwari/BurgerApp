import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button  //array of strings (classes.Button & props.btnType)
// we use joi to convert array into string to use danger and success
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

export default button;