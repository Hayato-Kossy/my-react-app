import React, { useReducer, useState } from 'react';

// 初期状態
const initialState = {
    todos: [],
};

// アクションタイプ
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Reducer関数
function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
}

function Todo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputText, setInputText] = useState('');

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            dispatch({ type: ADD_TODO, payload: inputText });
            setInputText('');
        }
    };

    const handleToggleTodo = id => {
        dispatch({ type: TOGGLE_TODO, payload: id });
    };

    const handleDeleteTodo = id => {
        dispatch({ type: DELETE_TODO, payload: id });
    };

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;