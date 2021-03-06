import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const[todos, setTodos] = useState([])
    
    const addTodo = todo => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>What is on the agenda today?</h1>
            <TodoForm onSumbit = {addTodo}/>
        </div>
    )
}

export default TodoList
