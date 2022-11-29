import React from "react";

export class List extends React.Component {
  state = {
    users: ["Nana", "Handre", "Saputra", "Naruto", "Madara"],
  };

  //   simpan state diluar render jangan di dalam render
  render() {
    return (
      <div>
        {/* untuk list bisa menggunakan map untuk me looping nya */}
        <ul>
          {this.state.users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}
