import React, {useState} from 'react'

function TodoForm(props) {
    const[input, setInput] = useState('');
    
    const handelChange = e => {
        setInput(e.target.value);
    };
   
    const handelSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    
    return (
        <form className='todo-form' onSubmit={handelSubmit}>
            <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handelChange}/>
            <button className='todo-buttom'>Add Todo</button>
        </form>
    )
}

export default TodoForm
