import React, { useState, useContext, useReducer, useEffect } from 'react'

import data from './data/data'
const AppContext = React.createContext()

const allCategories = [ ...new Set(data.map((item) => item.cateory))];

const AppProvider = ({ children }) => {
  const [show,setShow] = useState(false) 
    const [modal,setModal] = useState(false)
    const [category,setCategory] = useState(data);
    const [categories,setCat] = useState(allCategories)
    
    const [search,setSearch] = useState("")
    const [openDrop, setOpenDrop] = useState(false);
  
  const handleShow = ()=>{
    setShow(!show);
  }

    const filterItems = (cateory) => {
      setCategory(data);
    const newItems = data.filter((item) => item.cateory === cateory);
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