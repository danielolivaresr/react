/*const Button = (props) => {
    return(
        <div>
            <button onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}*/
/* 
const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
    )
*/
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

export default Button