import React from 'react';

const Query = (props) => (
  <h1 className="animated fadeInDown" style={{fontFamily: 'Russo One, sans-serif', color: '#F7F7F9'}}>Hello, <b style={{color: '#26B894', fontSize: '140px', fontFamily: 'Russo One, sans-serif'}}>{props.params.name}!</b></h1>
)

export default Query;