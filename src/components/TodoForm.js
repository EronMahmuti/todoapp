import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    })
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text: input 
        })
        setInput('');
    }
  return (
    <div>
        <form className='todo-form'>
            {props.edit ? (
                <div>
                <input type="text" placeholder="update your item" value={input} 
                name="text" className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='todo-button edit' onClick={handleSubmit} >update</button>
                </div>
            ) : (
               <div> <input type="text" placeholder="add a todo" value={input} 
                name="text" className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='todo-button' onClick={handleSubmit} >Add todo</button> 
                </div>
            )}
        </form>

    </div>
  )
}

export default TodoForm