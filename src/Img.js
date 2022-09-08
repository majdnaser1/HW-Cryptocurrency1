import React from 'react';
import  rowcol  from './Rowcol';

const Img = ({cryptoImg},{cryptoPrice}) => {
  return (
    <>
    
             <img  hight='50px' width='50px'src={cryptoImg} ></img>
             <div className='card-body'>
             <h3 className='card-text'>Price:</h3>
             <h3 className='card-text'>Details:-</h3>
             </div>
     
   </>
  )
}

export default Img