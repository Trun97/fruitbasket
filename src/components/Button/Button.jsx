import React from 'react';
import './Button.css'

function Button (props) {
    return (
       <section className="outer-coll">
           <h1>{props.fruitTitle}</h1>
           {props.children}
       </section>
    );
}

export default Button;

