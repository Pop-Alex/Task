import React, { useState, useContext, useReducer, useEffect } from 'react'

import data from './data/data'
const AppContext = React.createContext()

const allCategories = [ ...new Set(data.map((item) => item.category))];

const AppProvider = ({ children }) => {
  const [show,setShow] = useState(false) 
    
    const [category,setCategory] = useState(data);
    const [categories,setCat] = useState(allCategories)
    
    const [search,setSearch] = useState("")
    
  
  const handleShow = ()=>{
    setShow(!show);
  }

    const filterItems = (categoryy) => {
      setCategory(data);
    const newItems = data.filter((item) => item.category === categoryy);
    setCategory(newItems);
  };
  return (
    <AppContext.Provider
      value={{
        handleShow,
        show,
        setSearch,
        categories,
        setCategory,
        category,
        filterItems,
        data,
        search,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }