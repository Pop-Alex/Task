import React from 'react'

const Pagination = ({postPerPage,total,setCurrentPage}) => {
    const  pageNumbers = [];
    for( let i =1;i<=Math.ceil(total/postPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <div className='pagination'>
      <ul className='numbes'>
        {pageNumbers.map((page,index)=>{
            return <button className='paginaton-btn' key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
        })}
        
      </ul>
    </div>
  )
}

export default Pagination