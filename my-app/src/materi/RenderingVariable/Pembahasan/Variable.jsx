import React from "react";

export default class Variable extends React.Component {
  // beberapa variabel yg tidak di render oleh react js adalah nilai undifined, null, string kosong, nilai boolean:
  state = {
    a: null,
    b: "",
    c: true,
    d: 0,
  };
  // simpan state diluar render jangan di dalam render
  render() {
    return (
      <div>
        <div>a: {console.log(this.state.a)}</div>
        <div>b: {console.log(this.state.b)}</div>
        <div>c: {console.log(this.state.c)}</div>
        <div>d: {console.log(this.state.d)}</div>
        <div>e: {console.log(this.props.e)}</div>
        {/* e nilai undifined */}
      </div>
    );
  }
}
