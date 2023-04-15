import React from 'react';

export default function Car(props) {
const handleX = props.handleX;
console.log(handleX);
//goi chay
handleX('xe hoi nay len gia roi')
  return (
    <>
    <div> xe thuong hieu {props.brand}, gia{props.price} </div>
    </>
  );
}
