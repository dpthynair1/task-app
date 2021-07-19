import Header from "./components/Header.component";
import Tasks from "./components/Tasks";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useState,useEffect} from 'react';
import AddTask from "./components/AddTask.component";
import Footer from "./components/Footer.component";
import About from "./components/About.component";

function App() {

  const [tasks, setTasks] = useState([])
  const [showAdd, SetShowAdd] = useState(false);

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()

      setTasks(tasksFromServer)
    }
    
   getTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

// Add Task
const addTask = async(task) => {

  const res = await fetch('http://localhost:5000/tasks/',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

const data =  await res.json()

setTasks([...tasks, data])

// console.log(task);
// const id = Math.round(Math.random() * 1000) +1;
// console.log(id);

// const newTask = {id, ...task}
// setTasks([...tasks, newTask] )
}

// Delete Task
const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method : 'DELETE'
  })

  setTasks(tasks.filter((task) => 
  
  task.id !== id
  
  ))
}

// Add ToggleReminder
const toggleReminder = async(id) => {

  const taskToToggle = await fetchTask(id)
  const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method : 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body:  JSON.stringify(updateTask)
  })

  const data = await res.json()



 
// console.log('Task :' +id);
// setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))


setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !data.reminder} : task))
}
  return (
    <Router>
    <div className="container">
      <Header  onAdd = { () => SetShowAdd(!showAdd)} showAdd = {showAdd}/>
      {showAdd && <AddTask  onAdd = {addTask}/>}
     
      <Route path = '/' exact render ={ (props)=> (
        <> 
        {tasks.length > 0 ? <Tasks  tasks= {tasks} onDelete = {deleteTask}  onToggle={toggleReminder}/>
        : 'No Tasks to show'}
        </>
      )

      } />
      <Route  path = '/about'  component= {About}/>
      <Footer />

    </div>

    </Router>
  );
}

export default App;
