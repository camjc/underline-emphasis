import * as React from 'react';
import { UnderlineEmphasis } from '../src';
import renderer from 'react-test-renderer';

describe('it', () => {
  it('renders null without children', () => {
    const component = renderer.create(<UnderlineEmphasis/>);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });

  it('renders with children', () => {
    const component = renderer.create(<UnderlineEmphasis>children text</UnderlineEmphasis>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
