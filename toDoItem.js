function ToDoItem(text) {
  this.text = text;
  this.isComplete = false;
  this.delete = function () {};
  this.markComplete = function () {};

  this.markIncomplete = function () {};
}

export default ToDoItem;
