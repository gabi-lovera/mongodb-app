import React, { useState } from "react";

export default function From({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo({ title: inputValue, completed: false });
      setInputValue("");
    }
  };

  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter something to do"
            />
          </div>

          <div className="column one wide">
            <button type="submit" className="ui button circular icon green">
              <i className="white plus icon"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
