import React, { useEffect, useState } from 'react';
import TodoTable from './TodoTable';
import DisplayBoard from './DisplayBoard';
import CreateTodo from './CreateTodo';
import { getAllTodos, createTodo } from '../services/TodoService';

const Todo = () => {
  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  useEffect(() => {
    getAllTodo();
  }, []);

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  const handleTodoSubmit = () => {
    createTodo(todoShelf).then(() => {
      getAllTodo();
    });
  };

  const handleOnChangeTodoForm = (e) => {
    let inputData = { ...todoShelf };
    switch (e.target.name) {
      case 'todo':
        inputData.todo = e.target.value;
        break;
      case 'category':
        inputData.category = e.target.value;
        break;
      case 'isComplete':
        inputData.isComplete = e.target.checked;
        break;
      default:
        break;
    }
    setTodoShelf(inputData);
  };

  return (
    <>
      <CreateTodo
        onChangeForm={handleOnChangeTodoForm}
        handleSubmit={handleTodoSubmit}
      />
      <DisplayBoard numberOfItems={numberOfTodos} getAllItem={getAllTodo} />
      <TodoTable todos={todos} />
    </>
  );
};

export default Todo;
