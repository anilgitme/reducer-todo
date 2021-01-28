import Todo from './Todo';

const TodoList = (props) => {
    const toggleComplete = (id) => {
        props.dispatch({type: 'TOGGLE_COMPLETE', id:id})
    }
    return(
        <div>
            {props.state.map (todo => (
                <Todo complete= {todo.complete}
                id={todo.id}
                task={todo.task}
                toggleComplete={toggleComplete} />
            ))}
        </div>
    )
}
export default TodoList;