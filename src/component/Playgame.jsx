import React from 'react'
import Totalscore from './Totalscore'
import Selectno from './Selectno'



const Playgame = () => {
  return (
    <div className='container  mt-5 d-flex align-items-start  justify-content-between        '>
    <Totalscore/>
<Selectno/>
    </div>
  )
}

export default Playgame