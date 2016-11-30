import React from 'react';

const Query = (props) => (
  <h1 className="animated fadeInDown">Hi, <b style={{color: '#26B894'}}>{props.params.name}</b>!</h1>
)

export default Query;