import React from 'react'

const Selectno = () => {
    const arr=[1,2,3,4,5,6]
  return (
    <div className='d-flex'>
            {
        arr.map((elem)=>{
            return(
                <div className=' px-3  py-2 mx-3 border border-3 border-dark'>
                <h4 onclick={}>{elem}</h4>
            </div>
        
         
            )
        })
    }



    </div>


)
}

export default Selectno