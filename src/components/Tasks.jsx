import React,{useState} from 'react';
import Task from './Task.component';



const Tasks = ({tasks, onDelete,onToggle}) => {

   
    return (
       <div>
        {tasks.map((value, idx)=> 
         <Task key= {idx} value={value} onDelete = {onDelete}  onToggle = { onToggle}/>)}

       </div>
    )
}
 
export default Tasks;