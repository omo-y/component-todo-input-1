import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./component/inputTodo.jsx";
import { IncompleteTodos } from "./component/incompleteTodos.jsx";
import { Completetodos } from "./component/Completetodos.jsx";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    //   "ああああ",
    //  "いいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState([
    //`うううう`,
    //"ええええ"
  ]);
  const onChangetodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    console.log(newTodos);
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    //alert("削除");
  };
  const onClickComplete = (index) => {
    const newincompleteTodos = [...incompleteTodos];
    newincompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //alert("完了");
    console.log(newCompleteTodos);
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newincompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newincompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
    newCompleteTodos.splice(index, 1);
    setcompleteTodos(newCompleteTodos);

    //  const incompleteTodos=[...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newincompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangetodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Completetodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
export default App;
