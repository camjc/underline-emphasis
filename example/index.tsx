import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UnderlineEmphasis } from '../.';

const exampleText =
  "That's what it said on 'Ask Jeeves'. Now, when you do this without getting punched in the chest, you'll have more fun. Not tricks, Michael, illusions. I care deeply for nature. Marry me. Michael!";

const App = () => (
  <div>
    <h1>
      underline-emphasis Demo
      <br />
      {exampleText.split('.').map(partialText => (
        <React.Fragment key={partialText}>
          <UnderlineEmphasis>{partialText + '.'}</UnderlineEmphasis>
          <br />
        </React.Fragment>
      ))}
    </h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
