import React from "react";
import * as Validator from "validatorjs";

let Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label}</label> <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

let ErrEmail = ({ errors }) => {
  return (
    <ul style={{ color: "red", marginTop: "0" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
      {/* untuk error, i itu bebas ditulis elemen apa saja sesuai kebutuhan */}
    </ul>
  );
};
let ErrPassword = ({ errors }) => {
  return (
    <ul style={{ color: "red", marginTop: "0" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
      {/* untuk error, i itu bebas ditulis elemen apa saja sesuai kebutuhan */}
    </ul>
  );
};

// disarankan saat membuat komponen baru dibuat di file terpisah, karena untuk ini latihan jadi gpp

export default class Validation extends React.Component {
  state = {
    email: "",
    password: "",
    errors1: "",
    errors2: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();

    let { email, password } = this.state;

    // menampilkan validasi tanpa library :
    // let message = [];
    // let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line

    // if (!reg.test(String(email).toLowerCase())) {
    //   message = [...message, "email is not a valid email address"];
    // }
    // if (password.length <= 8) {
    //   message = [...message, "too short password"];
    // }

    // if (email.length === 0) {
    //   message = [...message, "username is required"];
    // }
    // if (password.length === 0) {
    //   message = [...message, "password is required"];
    // }
    // if (message.length > 0) {
    //   this.setState({
    //     errors: message,
    //   });
    // } else {
    //   alert(`
    //       Email : ${this.state.email}
    //       Password : ${this.state.password}
    //   `);
    //   this.setState({
    //     errors: [],
    //   });
    // }

    // menampilkan validasi dengan library validatorjs => disarankan karena lebih mudah (sebelumnya install dulu di npm i validatorjs)

    let data = { email, password };

    let rules = {
      email: "required|email",
      password: "regex: ^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$|required", //eslint-disable-line
    };
    Validator.useLang("id");
    let validation = new Validator(data, rules);
    validation.passes();

    this.setState({
      errors1: validation.errors.get("email"),
      errors2: validation.errors.get("password"),
    });
  };

  render() {
    const style1 = { width: "50%", margin: "17% auto" };
    return (
      <div style={style1}>
        <fieldset>
          <legend>Log In</legend>
          <form onSubmit={this.handleSubmit}>
            <Input type="email" name="username" label="Email" onChange={(value) => this.setState({ email: value })} />
            {this.state.errors1 && <ErrEmail errors={this.state.errors1} />}
            {/* menampilkan error dengan conditional render */}
            <br />
            <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
            {this.state.errors2 && <ErrPassword errors={this.state.errors2} />}
            <label style={{ fontWeight: "lighter", color: "LightGray" }}>*Minimal delapan karakter, setidaknya satu huruf besar, satu huruf kecil, dan satu angka:</label>
            <br />
            <button type="submit">Log In</button>
          </form>
        </fieldset>
      </div>
    );
  }
}
