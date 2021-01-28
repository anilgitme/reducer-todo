import React, {useState, useReducer} from 'react';
import { todoReducer, initialState } from '../reducers/reducer';
import TodoList from  './TodoList';

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTask, setNewTask] = useState('');

    const addTask = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TASK', payload: newTask});
    }
    const clearComplete = event => {
        event.preventDefault();
        dispatch({type: 'REMOVE_TASK'})
    }
    const handleChanges = event => {
        setNewTask(event.target.value)
    }
    return (
        <div>
            <form>
                <input 
                type="text"
                className='todo'
                name='todo'
                value={newTask}
                onChange={handleChanges}
                />
                <button onClick={addTask}>ADD TASK</button>
                <button onClick={clearComplete}>CLEAR TASK</button>
            </form>
            <TodoList id={state.id} state={state} dispatch={dispatch} />
        </div>
    )
}

export default TodoForm;