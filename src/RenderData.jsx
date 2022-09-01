import { Button } from "reactstrap";
import "./App.css";
import ToDoItem from "./Todoitem";

function RenderData({ data, onDelete }) {
  return (
    <>
      <div className="list">
        <p>Here is the List</p>
        <ol>
          {data.map((item) => {
            // return (
            //   <>
            //     <li>{item.title}</li>
            //     <Button
            //       onClick={() => {
            //         onDelete(item.id);
            //       }}
            //     >
            //       x
            //     </Button>
            //   </>
            // );
            return <ToDoItem item={item} key={item.id} onDelete={onDelete} />;
          })}
        </ol>
      </div>
    </>
  );
}

export default RenderData;
