import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from "./components/Todo";
import Tasklist from './components/Tasklist';
import { useState } from 'react';
function App() {
  const [listitem, setListitem] = useState([]);
  let addele = (val) => {
    if(val!==""){
      const task = {
        id: listitem.length===0 ? 1: listitem[listitem.length-1].id+1,
        tasksub: val,
        completed: false
      }
      setListitem([...listitem,task]);
    }
  }
  const deleteval = (id)=>{
    setListitem(listitem.filter((task) => task.id !== id));
  }
  const updateval = (id) =>{
    listitem.map((task)=>{
      if(task.id===id){
        return setListitem([...listitem, !task.completed]);
      }
      else{
        return task;
      }
    })}
  return (
    <div className='bg-slate-900  overflow-x-hidden  text-white flex flex-col items-center '>
      <Router>
        <Routes>
          <Route path='/' element={<Todo addele = {addele}/>}/>
        </Routes>
      </Router>
      <h1 className='mt-3 mb-5 w-[40vw] flex justify-center text-3xl border-white border-b-2 pb-5'> TASKS</h1>
      {listitem.map((task)=>{
        return(
          <Tasklist key={task.id} index={task.id} item={task.tasksub} updateval={updateval} deleteval={deleteval} complete={updateval}/>
        )
      })}
    </div>
  );
}

export default App;
