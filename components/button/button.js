import React from 'react';

const Button = ({label})=> (
    <button
        onClick={()=>alert('oieasdf123')}
    >
        {label}
    </button>
);

export default Button;
