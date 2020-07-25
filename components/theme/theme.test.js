import React from 'react';
import { shallow } from 'enzyme';
import Theme from 'components/theme';

describe('Theme', () => {
  let mountedTheme;

  beforeEach(() => {
    mountedTheme = shallow(<Theme />);
  });

  it('renders without crashing', () => {
    shallow(<Theme />);
    expect(mountedTheme).toMatchSnapshot();
  });

  it('expect to have Layout component', () => {
    expect(mountedTheme.find('div')).toHaveLength(1);
  });
});
