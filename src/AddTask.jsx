import {useState, useContext } from 'react';
import { useTasksDispatch } from './TasksContext';


export default function AddTask({ onAddTask }){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return(
        <div className='inputDiv'>
            <input
                placeholder='Add task'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className='btns'  onClick={() => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text:text
                });
            }} >
                Add
            </button>
        </div>
    )
}
let nextId = 0;








