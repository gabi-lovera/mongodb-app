import React, { useState } from "react";

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);
  const [completedState, setCompleted] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      editTodoItemProp({
        title: tempValue,
      });
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setValue(value);
      setIsEditing(false);
    }
  };

  const handleInputonChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodoItemProp({ completed: newState });
      return newState;
    });
  };

  return isEditing ? (
    <div className="row">
      <div className="column seven wide">
        <div className="ui input fluid">
          <input
            type="text"
            value={tempValue}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputonChange}
            autoFocus={true}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
        <h2 className={"ui header" + (completedState ? " green" : "")}>
          {value}
        </h2>
      </div>
      <div className="colomn one wide">
        <button
          className={
            "ui button circular icon" + (completedState ? " blue" : " green")
          }
          onClick={handleButtonClick}
        >
          <i className="white check icon"></i>
        </button>
      </div>
      <div className="colomn one wide">
        <button
          className="ui button circular icon red"
          onClick={removeTodoItemProp}
        >
          <i className="white remove icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
