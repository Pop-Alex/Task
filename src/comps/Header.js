import React from 'react'
import { useGlobalContext } from '../context'
import { FaBars } from 'react-icons/fa';
const Header = () => {
  const {show,handleShow} = useGlobalContext()
  return (
    <div className='header'>
      <div className="header-info">
        <button className='nav-toggle' onClick={()=>handleShow()}><FaBars/></button>
        <h1>Logo</h1>
      </div>

      
    </div>
  )
}

export default Header