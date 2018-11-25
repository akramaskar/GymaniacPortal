// Middleware functions

//Used for calling the handler (changes state) in the App.js
export const onFieldChange = (event, handler) => {
  // console.log("current event: " + event.target.id);
  const fieldName = event.target.id;
  const fieldValue = event.target.value;
  handler(fieldName, fieldValue);
};

export const onSubmitClick = (event, handler) => {
  handler(event);
};
