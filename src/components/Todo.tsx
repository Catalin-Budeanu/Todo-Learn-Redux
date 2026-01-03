import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { addTodo, removeTodo, toggleTodo } from '../feature/todoReducer';
import { logout } from '../feature/authReducer';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleAddTodo = () => {
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  return (
    <>
      <div className="bg-gray-50">
        <button
          onClick={handleLogout}
          className="mt-4 ml-8 bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer font-medium hover:bg-blue-700 transition "
        >
          LogOut
        </button>
        <div className="flex items-center justify-center min-h-screen ">
          <div className="max-w-sm w-full bg-gray-100 p-6 rounded-lg shadow-xl">
            <h1 className="text-xl font-bold text-blue-500 mb-4 text-center">
              TODO List
            </h1>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Add Todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border border-gray-400 flex-1 rounded-lg py-1 px-2"
              />
              <button
                onClick={handleAddTodo}
                className="px-6 py-1 bg-blue-500 rounded-lg text-white cursor-pointer hover:scale-105"
              >
                Add
              </button>
            </div>
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center py-1 border-b border-gray-300"
                >
                  <span
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`cursor-pointer ${
                      todo.completed ? 'line-through' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => dispatch(removeTodo(todo.id))}>
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
