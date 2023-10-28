import React from 'react'
import { useState } from 'react'
const Todo = (props) => {
    const [val, setval] = useState("");
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addele(val);
            setval("")
        }
    }
  return (
                <div className='w-1/2 mt-10 flex h-[15vh] justify-center items-center p-5'>
                    <input className=' box-border w-1/2 h-[10vh] rounded-lg flex dark:text-center placeholder:text-white dark:bg-slate-800 dark:text-white focus:outline-none justify-center' 
                    placeholder='Your Task' type='text'
                    value={val}
                    onChange={e=>{setval(e.target.value) }}
                    onKeyDown={handleEnterPress}
                    />
                    <button className=' bg-green-400 flex shadow-sm shadow-white  items-center flex-col ml-5 w-[3vw] h-[3vw] text-3xl rounded-full'
                    onClick={()=>{
                        props.addele(val);
                        setval("")
                    }}>+</button>
                </div>
  )
}

export default Todo