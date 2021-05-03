import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import db from "../firebase";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().todo,
        }))
      );
    });
    console.log(todos);
  }, []);
  return (
    <div>
      <h1 className="heading py-2">Todo App!</h1>
      <Link to="/addtodo">
        <Button variant="info">Add New Todo</Button>
      </Link>
      <TodoList todos={todos} />
    </div>
  );
};

export default HomeScreen;
