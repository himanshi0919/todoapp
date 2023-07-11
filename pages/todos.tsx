import React, { useEffect, useState } from 'react';
import Tabs from '@/components/tabs';

interface Todo {
 
  id: number;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    let storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos) as Todo[]);
    }
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">Your Todos</h1>
          {todos.length === 0 && (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your Todos will show up here. Please add a todo by going to the homepage
            </p>
          )}
        </div>
        <Tabs />
        <div className="flex flex-wrap -m-4"></div>
      </div>
    </section>
  );
};

export default Todos;
