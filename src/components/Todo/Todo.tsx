import React, { useState, useReducer, useCallback } from 'react';
import { addTodo, Todo, removeTodo, doneTodo } from '../../store/todo';

interface Props {
    onAddTodo: typeof addTodo;
    onRemoveTodo: typeof removeTodo;
    onDoneTodo: typeof doneTodo;
    todo: Array<Todo>;
}
const initTodo = {
    title: '',
    desc: '',
};
const todoReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'title':
            return {
                ...state,
                title: action.title,
            };
        case 'desc':
            return {
                ...state,
                desc: action.desc,
            };
        default:
            throw new Error();
    }
};
const TodoComponent: React.FC<Props> = ({
    onAddTodo,
    todo,
    onRemoveTodo,
    onDoneTodo,
}) => {
    const [state, dispatchTodo] = useReducer(todoReducer, initTodo);
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const type = e.target.getAttribute('type') || 'title';
            return dispatchTodo({
                type,
                [type]: e.target.value,
            });
        },
        [],
    );
    return (
        <div>
            <ul>
                <li>
                    <input
                        type='title'
                        onChange={handleChange}
                        placeholder={'제목입력'}
                    />
                    <input
                        type='desc'
                        onChange={handleChange}
                        placeholder={'설명입력'}
                    />
                    <button
                        onClick={e =>
                            onAddTodo({
                                desc: state.desc,
                                title: state.title,
                                isDone: false,
                            })
                        }
                    >
                        추가하기
                    </button>
                </li>
            </ul>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>
                        <p
                            style={
                                todo.isDone
                                    ? { color: 'red' }
                                    : { color: 'blue' }
                            }
                        >
                            <b>{todo.title}</b>
                        </p>
                        {todo.desc}
                        {!todo.isDone && (
                            <button onClick={e => onDoneTodo(index)}>
                                완료하기
                            </button>
                        )}
                        {todo.isDone && (
                            <button onClick={e => onRemoveTodo(index)}>
                                삭제하기
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoComponent;
