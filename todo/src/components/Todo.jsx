export default Todo = (props) => {
    return (
        <li style={props.complete ? {textDecoration: 'line-through'} : null}
        onClick={() => props.toggleComplete(props.id)}>
            {props.task}
        </li>
    )
}