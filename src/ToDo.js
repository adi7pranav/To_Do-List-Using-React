import { useState } from "react";
import Task from "./Task";
function ToDo()
{
    const[newTask,setNewTask]=useState();
    const[todoList,setToDoList]=useState([]);
    function inputHandler(event)
    {
        setNewTask(event.target.value);
    }
    function addTask()
    {
        const task={
            id:todoList.length===0? 1: todoList[todoList.length-1].id+1,
            taskName:newTask,
            status:false
        }
        setToDoList([...todoList,task]);
    }
    function deleteTask(id)
    {
        setToDoList(todoList.filter((task)=>task.id!==id));
    }
    function doneTask(id)
    {
        setToDoList( todoList.map((task)=>{
            if(task.id===id)return {...task,status:true};
            return task;
        }));
    }
    return (
        <div><div style={{background:"orange"}}><h1 style={{fontFamily:"Serif"}}>TO-DO List</h1>
            <div style={{display:"inline-flex",justifyContent:"space-between"}}><h5>Task</h5>
        &nbsp;<input type="text" placeholder="Add Task Details here" onChange={inputHandler}/>
        <button style={{width:"auto",color:"#ffa600", backgroundColor:"#000000", border:"0px",borderRadius:"2px"}} 
        onClick={addTask}>Add</button><br/>
        {/* {newTask} */}
        </div>
        </div>
        <div>
        <table width={"100%"}>
            <tr>
                <th>Task Name</th>
                <th>Mark as Done</th>
                <th> Delete</th>
            </tr>
        {
            todoList.map((task)=>{
                
              return( <Task taskName={task.taskName} id={task.id} status={task.status} doneTask={doneTask} deleteTask={deleteTask}/>);
               
            })
        }
        </table>
        </div>
        </div>
        
        );
}
export default ToDo;