function ToDoItem(text, isComplete) {
  this.text = text;
  this.isComplete = isComplete;
  this.delete = function () {};
  this.markComplete = function () {};

  this.markIncomplete = function () {};
}
