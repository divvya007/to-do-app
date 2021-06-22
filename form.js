export function Form(onSubmitCallback) {
  this.form = document.getElementById("myForm");
  this.buttonElement = document.getElementById("textId");
  this.onSubmitCallback = onSubmitCallback;
  this.handleOnSubmit = (e) => {
    if (e.preventDefault) e.preventDefault();
    // console.log(this.buttonElement.value);
    this.onSubmitCallback(this.buttonElement.value);
    return false;
  };
  this.form.addEventListener("submit", this.handleOnSubmit);
}
