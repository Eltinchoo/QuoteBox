import React from 'react';
import { useState } from 'react';

const FootCard = ({change, color, author}) => {
    return (
        <div >
            <div className='foot-card'>
            <p className='author' style={{color: color}}>{author}</p>
         <i className="fa-solid fa-angle-right" onClick={change} style={{background:color}}></i>
         </div>
        </div>
    );
};

export default FootCard;