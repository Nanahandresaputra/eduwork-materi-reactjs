import React from "react";

export default class Conditional extends React.Component {
  //   render() {
  //     // cara ke 1 menggunakan if else;
  //     let isLogIn = false;
  //     let message = "";
  //     if (isLogIn) {
  //       message = "anda sudah log in";
  //     } else {
  //       message = "silakan log in dulu";
  //     }
  //     return (
  //       <div>
  //         <h1>{message}</h1>
  //       </div>
  //     );

  // cara 2 menggunakan teenari operator
  // contoh 1
  // let isLogIn = false;
  // return (
  // <div>{isLogIn ? <h1>anda sudah Log in</h1> : <h1>silakan Log in dulu</h1>}
  // </div>
  // )
  // }

  // contoh 2
  state = { isLoading: true };
  // simpan state diluar render jangan di dalam render

  render() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
    return <div>{this.state.isLoading ? <h1>Loading...</h1> : <h1>anda sudah masuk</h1>}</div>;
  }
}
