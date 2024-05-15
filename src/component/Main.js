import React, { useState } from 'react'
import Shoes from '../image/shoes.png'
const Main = () => {
  const [data ,setdata]=useState('');

 const alert1=()=>{
  window.confirm("sure to check category")
  setdata("we are processing for the order")
 }


 const alert2=()=>{
  window.confirm("do u realy want to buy")
  setdata("finding for the category")


 }


  return (
    <>
    <h3 className='f-5 text-success text-center py-4'>{data}</h3>
    <div className='top container d-flex justify-content-between'>
      <div className='left-main ml-4  '>
        <h1 style={{ fontSize: "6vw ", textTransform: "uppercase", fontWeight: "900", lineHeight: ".9" }}> your feet <br></br> deserve
          <br></br>the best</h1>
        <p className='my-4 px-3'>
          You can add webfonts, meta tags, or analytics
          <br /> to this file.
          The build step will place the bundled <br />scripts into the  tag.
        </p>
        <button className='btn-danger mx-4 fs-5 px-3 rounded py-1' onClick={alert2}>Shop Now</button>
        <button className='fs-5 py-1  px-3 rounded  btn-secondary' onClick={alert1}>Category</button>
        <p className='my-4 px-3'>Contact for order the shoes</p>
      </div>
      <img src={Shoes} className='w-50 shadow ' alt='shoes not found' />
    </div>
    </>
  )
}
export default Main