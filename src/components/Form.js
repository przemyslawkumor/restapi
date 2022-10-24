import React from "react";


const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input type="text"
        onChange={props.change}
        value={props.value}
        placeholder="Wpisz miasto" />
      <button>Wyszukaj miasto</button>
    </form>
  );
}

export default Form;
