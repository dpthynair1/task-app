import Header from "./components/Header.component";
import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from "./components/AddTask.component";

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2.30pm',
        reminder: true

    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1.30pm',
        reminder: true

    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2.30pm',
        reminder: false

    }
])

const [showAdd, SetShowAdd] = useState(false);


// Add Task
const addTask = (task) => {
console.log(task);
const id = Math.round(Math.random() * 1000) +1;
console.log(id);

const newTask = {id, ...task}
setTasks([...tasks, newTask] )
}

// Delete Task
const deleteTask = (id) => {
  console.log('delete'+id);

  setTasks(tasks.filter((task) => 
  
  task.id !== id
  
  ))
}

// Add ToggleReminder
const toggleReminder = (id) => {
console.log('Task :' +id);
setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))

}
  return (
    <div className="container">
      <Header  onAdd = { () => SetShowAdd(!showAdd)} showAdd = {showAdd}/>
      {showAdd && <AddTask  onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks  tasks= {tasks} onDelete = {deleteTask}  onToggle={toggleReminder}/>
      : 'No Tasks to show'}

    </div>
  );
}

export default App;
