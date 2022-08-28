import React from 'react';


const QuoteBox  = ({index,color}) => {
    return (
        <div>
            <div className='icon-and-quote'>
                <i className="fa-solid fa-quote-left" style={{color: color}} ></i>
                <p style={{color: color}} >{index}</p>
            </div>
            
            
        </div>
    );
};

export default QuoteBox ;