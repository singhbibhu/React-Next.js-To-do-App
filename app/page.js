"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settittle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submithandle  = (e)=>{
   e.preventDefault();
   setmainTask([...mainTask, { title, desc}]);
   console.log(title);
   console.log(desc);
   settittle("");
   setdesc("")
   console.log(mainTask);
  }
  const deleteHnadler = (i)=>{
    let copytask =[...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2> No Task Available !</h2>
 if(mainTask.length>0){
  renderTask= mainTask.map((t, i) => {
    return (
      <li key={i} className='flex items-center justify-between mb-8'>
         <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
         <button onClick={()=>{
          deleteHnadler(i)
         }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
     
     
    );
  });
 }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>To-Do-App</h1>
    <form onSubmit={submithandle} >

      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Title Here' value={title} onChange={(e)=>{
        settittle(e.target.value)

      }}> 
      </input>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}> 
      </input>
      <button className='bg-sky-600 text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>

    </>
  )
}

export default page