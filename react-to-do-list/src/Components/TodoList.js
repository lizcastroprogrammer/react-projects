import React from 'react';

export const TodoList = () => {
    const [ todolist, setTodolist ] = React.useState([{text: 'Walk dog', id: 1, isComplete: false}, {text: 'Finish homework', id: 2, isComplete: false}, {text: 'Do laundry', id: 3, isComplete: false}]);
    const [ newTodo, setNewTodo ] = React.useState({ text: '' });

    const handleChange = (event) => {
        setNewTodo({ text: event.target.value, id: Math.random() });
    }

   const handleSubmit = (event) => {
       event.preventDefault();
       setTodolist([...todolist, newTodo]);
       setNewTodo({ text: '' });
    }

    const handleDeleteClick = (id) => {
        const removeItem = todolist.filter((todo) => {
            return todo.id !== id;
        })
        setTodolist(removeItem);
    }

    return (
        <ul>
            {
                todolist.map((item) => {
                    return <li key={item.id} onClick={() => handleDeleteClick(item.id)}>{item.text}</li>
                })
            }
            <form onSubmit={handleSubmit}>
                <input type='text' value={newTodo.text} placeholder='Add Todo' onChange={handleChange}/>
                <input type='submit' value='Add' />
            </form>
        </ul>
    )
}