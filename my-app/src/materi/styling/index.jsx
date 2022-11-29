import React from "react";
import Bootstrap from "./Bootstrap";
import Inline from "./Inline";
import Module from "./module";
import Plain from "./plain";
import Sass from "./Sass";
import StyledCOmponent from "./StyledComponent(CssInJs)";

export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Plain />
        <Sass />
        <Inline />
        <Module />
        <StyledCOmponent />
        <Bootstrap />
      </div>
    );
  }
}
