const Button = ({text, backgroundColour, onClick}) => {
    if(!text) text = 'btn'
    backgroundColour = backgroundColour?? 'green'

    const fn1 = (e) => {
        onClick()
        return;
    }
    return <button 
        style={{backgroundColor: backgroundColour}} 
        className='btn'
        onClick = {fn1}
        >
            
            {text}
            </button>
}

export default Button
