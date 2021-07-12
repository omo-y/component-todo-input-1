import React from "react";

export const Completetodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div class="complete-area">
      <p class="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
