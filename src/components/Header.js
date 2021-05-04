
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const buttonOnClick = () => {
        console.log('button click')
    }

    return (
        <header>
            <h1>Task Tracker - {title}</h1>
            <Button onClick={buttonOnClick}/>
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
