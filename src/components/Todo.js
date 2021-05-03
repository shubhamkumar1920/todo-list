import React, { useState } from "react";
import "./todo.css";
import { Container, Form, Button } from "react-bootstrap";
import db from "../firebase";

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [edit,setEdit]=useState("");
  const [show,setShow]=useState(false);
  const deleteTodo = (e) => {
    e.preventDefault();
    db.collection("todos").doc(todo.id).delete();
  };
  const editTodo = () => {
    if(!show){
      setShow(true);
    }
  }
  const updateHandle = (e) => {
    e.preventDefault();
    console.log(edit);
    db.collection("todos").doc(todo.id).set({
      todo:edit
    },{merge : true});
    setShow(false);
  }
  

  return (
    <div className="todo"> 
      <div className="todo-id">
        <h5>
          ID:{" "}
          <span
            style={{
              marginLeft: "10px",
              color: "yellow",
            }}
          >
            {todo.id.slice(0, 3)}
          </span>
        </h5>
      </div>
    {show ? (
        <div>
           <Container>
              <Form onSubmit={updateHandle}>
               <Form.Group>
                <Form.Control
                    type="text"
                  placeholder="update todo"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                ></Form.Control>
                </Form.Group>
              <Button type="submit" variant="success">
                Add
                </Button>
            </Form>
            </Container>
        </div>
      
    ): (
        <>
        <div className="todo-text">
          {checked ? <p className="checked">{todo.text}</p> : <p>{todo.text}</p>}
        </div>
        <div class="buttons">
          <Button
            onClick={() => setChecked(!checked)}
            style={{ marginLeft: "10px" }}
            variant="dark"
            className="del-button"
          >
            mark
          </Button>
          <Button
            onClick={editTodo}
            style={{ marginLeft: "10px" }}
            variant="success"
            className="del-button"
          >
           Edit
          </Button>
          <Button
            onClick={deleteTodo}
            style={{ marginLeft: "10px" }}
            variant="danger"
            className="del-button"
          >
           Delete
          </Button>
        </div>
        </>
    )}
    </div>
  );
};

export default Todo;
