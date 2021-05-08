
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({toggleAddTask, showAddTask}) => {
    return (
        <header className='header'>
            <h1>Task Tracker </h1>
            <Button
                color={showAddTask ? 'red' : 'green'} 
                text={showAddTask ? 'Close': 'Add'}
                onClick={toggleAddTask}
            />
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}


// css in js
// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'black'
// }


export default Header
