import React from "react";
import style from "./index.module.css";
export default class Module extends React.Component {
  render() {
    return (
      <div>
        <button className={`${style.btnnn} ${style.btnInfo}`}>Go Eduwork</button>
      </div>
    );
  }
}

// menjadi solusi untuk masalah global naming scope dan inline css
