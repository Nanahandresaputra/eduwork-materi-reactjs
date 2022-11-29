import React from "react";
// import FormElement from "./pembahasan/formElement";
import Validation from "./pembahasan/Validation";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        {/* <FormElement /> */}
        <Validation />
      </div>
    );
  }
}
