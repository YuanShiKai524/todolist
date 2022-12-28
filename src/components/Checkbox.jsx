import React from 'react'

const Checkbox = ({ checked }) => {

  return (
    <div className={checked === true ? 'checkbox-container-checked' : 'checkbox-container'}>
      <div className='checkmark'></div>
    </div>
  )
}

export default Checkbox
