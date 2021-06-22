import ToDoList from "./toDoList.js";
import ToDoItem from "./toDoItem.js";
import { Form } from "./form.js";

function App() {
  this.addText = () => {};
  this.handleOnFormSubmit = (text) => {
    this.list.addToDo(text);
  };

  this.form = new Form(this.handleOnFormSubmit);
  this.list = new ToDoList();
}

let app = new App();
