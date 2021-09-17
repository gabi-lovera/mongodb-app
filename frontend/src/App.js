import React, { useState, useEffect } from "react";
import todos from "./apis/index";
import Form from "./components/From";
import Section from "./components/Section";
import List from "./components/List";

const appTittle = "To-Do App";
const list = [
  { id: 1, title: "test1", completed: false },
  { id: 2, title: "test2", completed: false },
  { id: 3, title: "test3", completed: false },
];
function App() {
  const [todoList, setTodoList] = useState(list);

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }
    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTittle}</h1>
      </Section>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  );
}

export default App;
