import React from 'react';
const coin = (props) => {


  return (
    <>
    <div className="p-2">
      <div className='card' style={{ width: '18rem' }}>
        <img src={props.image} style ={{width : "80px", alignSelf: "center" , margin: "10px"}} alt='myimg' />
        <h6 className='card-title'>{props.symbol}</h6>

        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>
          <h5 className='card-title'>{props.price}</h5>
          <h5 className='card-title'>{props.marketcap}</h5>
          </p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default coin;
