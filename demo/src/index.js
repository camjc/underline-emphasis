import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>
          underline-emphasis Demo{" "}
          {"That's what it said on 'Ask Jeeves.' Now, when you do this without getting punched in the chest, you'll have more fun. Not tricks, Michael, illusions. I care deeply for nature. Marry me. Michael!"
            .split(" ")
            .map(word => (
              <Fragment key={word}><Example >{word}</Example>{' '}</Fragment>)
            )}
        </h1>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
