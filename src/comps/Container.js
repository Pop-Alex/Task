import React, { useState } from 'react'

import Modal from './Modal'
import Pagination from './Pagination'

import { useGlobalContext } from '../context'


const Container = () => {
    const {show,category,search} = useGlobalContext()
    const [modal,setModal] = useState(false)
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(6)
    
    const [openDrop, setOpenDrop] = useState(false);
     const handelOpen=()=>{
        setOpenDrop(!openDrop);
     }

    const handleButton = ()=>{
        setModal(!modal);
    }

    

  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPosts = category.slice(firstPost,lastPost)

  return (
    <div  className='container'>

      <div className="container-info">
            <div className="content">
                <div className="col">
                    <div className="content-upper">
                        <div className='upper-content'>
                            <p>{category.length} items</p>
                            <Pagination postPerPage={postPerPage} total={category.length} setCurrentPage={setCurrentPage} ></Pagination>
                            
                            <button className='btn-harta' onClick={handleButton}>Harta</button>
                        </div>
                        <div className='modal-container'>
                  {
                    modal && <Modal modal={modal} category={category} handleButton={handleButton}></Modal>
                  }
            </div>  
                    </div>
                    <div className="content-middle">
                        <div className="middle-info">
                            <div className="cards">
                                
                                {currentPosts.filter((filt)=>{
                                    return search.toLocaleLowerCase() === ' '
                                    ? filt : filt.name.toLocaleLowerCase().includes(search)
                                }).map((item,idx)=>{
                                    return (
                                    <div className="box" key={idx} >
                                        <div className='box-upper'>
                                            
                                            <h3>{item.name}</h3>
                                        </div>
                                        <p>{item.location}</p>
                                        
                                </div>
                                
                                    )
                                })}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
      </div>
    </div>
  )
}

export default Container