import React, {useState} from 'react'
import './TodoList.css'; 

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const addTodo = () => {

        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo])
            setNewTodo('')
        }


    }

    const removeTodo = (index) => {
        const temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
    }



    return (
        <div className='container'>
            <h1 className='center'>Todo list</h1>
            <div className='row '>
                <h3>Add todos here</h3>
                <div className='input-field col s4'>

                    <input
                        type="text"
                        id="newTodo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                </div>
                <div className="col s4">
                    <button className="btn waves-effect waves-light" onClick={addTodo}>
                        Add Todo
                    </button>
                </div>

            </div>
            <div className='center'>
                <h3>TODOS</h3>

                <ul className="collection">
                    {todos.map((todo, index) => (
                    <li className="collection-item" key={index}>
                        {todo}
                        <span
                        className="secondary-content"
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeTodo(index)}
                        >
                        <i className="material-icons">delete</i>
                        </span>
                    </li>
                    ))}
                </ul>
                    </div>

            
        </div>
    )
}


export default TodoList