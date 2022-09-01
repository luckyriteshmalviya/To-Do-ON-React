import { useState } from "react";
import "./App.css";
import { Button } from "reactstrap";

function ToDoItem({ item, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [prevInput, newInput] = useState(item.title);

  function Update() {
    item.title = prevInput;
    return setEditing(!editing);
  }

  return (
    <li>
      {editing ? (
        <div className="listItem">
          <input
            className="update"
            value={prevInput}
            onChange={(e) => {
              newInput(e.target.value);
            }}
          />
          <Button onClick={Update}>Update</Button>
        </div>
      ) : (
        <div className="listItem">
          {item.title}
          <div>
            <Button
              style={{ backgroundColor: "Blue" }}
              onClick={() => setEditing(!editing)}
            >
              Edit
            </Button>
            <Button
              style={{ backgroundColor: "red" }}
              onClick={() => onDelete(item.id)}
            >
              x
            </Button>
          </div>
        </div>
      )}
    </li>
  );
}

export default ToDoItem;
