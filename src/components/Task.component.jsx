import {FaTimes} from 'react-icons/fa';


const Task = ({value, onDelete, onToggle}) => {
    return <div className={`task ${value.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(value.id)}>
    <h3>{value.text} <FaTimes  style= {{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(value.id)}  /></h3>
    <p>{value.day}</p>
    </div>
}


export default Task;