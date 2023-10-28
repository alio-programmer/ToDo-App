import React, { useState } from 'react'

function Tasklist(props) {

    const [change,setchange] = useState(false);
    const handleclick = (e)=>{
      setchange(!change);
    }
    const updatedata = (e)=>{
      props.complete(props.id)
      handleclick();

    }
  return (
    <div className='w-1/2 h-max flex flex-col pr-6 items-center'>
        <li className=' border-white border-solid rounded-xl border-2 m-2 list-none w-[30vw] h-max left-x-4 p-4'>
            {props.item}
            <button className={`fa-solid fa-trash ml-10 hover:text-red-600 float-right`}
            onClick={e=>{
                props.deleteval(props.index);
            }}></button>
            <button className={`fa-solid fa-check ml-10 float-right text-red-500 ${(change === true)? 'text-green-500': 'text-red-500'}`}
            onClick={updatedata}></button>
        </li>
    </div>
  )
}

export default Tasklist
