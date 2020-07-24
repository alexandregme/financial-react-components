import React from 'react';

const Button = ({label})=> (
    <button
        onClick={()=>alert('oie')}
    >
        {label}
    </button>
);

export default Button;
