import "./App.css";
import { Button } from "reactstrap";
import { useState } from "react";
import RenderData from "./RenderData";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  function saveNote() {
    if (!input) {
      return alert("Please Write Note");
    }
    const payload = { title: input, id: new Date().getTime() };
    setData([...data, payload]);
    setInput("");
  }

  function onDelete(id) {
    setData((previousList) => {
      return previousList.filter((item) => item.id !== id);
    });
  }

  return (
    <>
      <div className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Add Note.."
        />
        <Button style={{ backgroundColor: "green" }} onClick={saveNote}>
          +
        </Button>
      </div>
      <div>
        <RenderData data={data} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
