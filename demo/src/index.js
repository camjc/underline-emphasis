import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Example from "../../src";

const exampleText =
  "That's what it said on 'Ask Jeeves'. Now, when you do this without getting punched in the chest, you'll have more fun. Not tricks, Michael, illusions. I care deeply for nature. Marry me. Michael!";
class Demo extends Component {
  render() {
    return (
      <div>
        <h1>
          underline-emphasis Demo
          <br />
          {exampleText
            .split(".")
            .map(partialText => (
              <Fragment key={partialText}>
                <Example>{partialText + '.'}</Example>
                <br />
              </Fragment>
            ))}
        </h1>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
