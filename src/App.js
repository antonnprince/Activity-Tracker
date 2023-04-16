import React from 'react'
import './App.css'
import { useState } from 'react';

export default function App() {
  const[task,setTask] = useState([])
  const [cons,setCons] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday</h2>
      </div>
      <div className="input">
        <input value={cons}
        onChange={(e)=>{setCons(e.target.value)}}
        placeholder="🖊️ Add item..." />
        <i 
        onClick={()=>{setTask([...task,{id:Date.now(),status:false,text:cons}])
        setCons('')
      }}
        className="fas fa-plus"></i>
      </div>
      {
        task.map((obj,index)=>{
      return(
       <div key={index} 
       className="todos">
        <div className="todo">
          <div className="left">
            
            <input 
            onClick={(e)=>{console.log(e.target.checked)
                        console.log(obj) 
                        setTask(task.filter(obj2=>{
                            if(obj2.id===obj.id)
                            {
                              obj2.status=e.target.checked
                            }
                            return obj2;
                        }))
                      }} 
                      value={obj.status}
            type="checkbox" name="" id="" />

            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={
               ()=>{
                setTask(task.filter(obj2 => {
                  if (obj2.id!== obj.id) {
                    return obj2;
                  } else {
                    return null;
                  }
                }));
              }
            }
            className="fas fa-times"></i>
            </div>
        </div>
      </div>
      )})}
    </div>
    
  )
}


