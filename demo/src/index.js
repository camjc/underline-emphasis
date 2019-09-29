import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>
          underline-emphasis Demo
          <br />
          <Example>Foo</Example>
          <br />
          <Example>Bar</Example>
          <br />
          <Example>Baz</Example>
          <br />
          <Example>Quux</Example>
        </h1>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
