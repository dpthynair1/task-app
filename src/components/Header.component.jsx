import PropTypes from 'prop-types';
import '/Users/dpthynair/React/task-app/src/style.css';
import Button from './Button.component';
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd,showAdd}) =>{

const Location = useLocation()
   
    return <header>

    <h1>{title}</h1>
    {Location.pathname === '/' &&<Button  color={showAdd ? 'red' : "green"} text={showAdd? 'close': 'Add'} onClick= {onAdd}/>}
    </header>
}

Header.defaultProps = {
    title : 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header;