import React from 'react'
import { useGlobalContext } from '../context'
const Sidebar = () => {
  const {show,setSearch,categories,filterItems,setCategory,data} =useGlobalContext()
  return (
    
    <div className={`${show ? " show-sidebar sidebar-toggle  ": "show-sidebar"}`}>
            <div className="sidebar">
                <div className="sidebar-list">
                    <input type="text" placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
                    <ul className='links'>
                        <h2>Category</h2>
                        <li>
                        {categories.map((category,index)=>{
                            return (
                                <button className='sidebar-btn' key={index} onClick={()=>filterItems(category)}>{category}</button>
                            )
                        })}
                        </li>
                    </ul>
                    <button className='sidebar-biutton' onClick={()=>setCategory(data)}>Clear list</button>
                  </div>  
                
                </div>
        </div>
  )
}

export default Sidebar