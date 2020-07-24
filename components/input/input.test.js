import React from 'react';
import { shallow } from 'enzyme';
import Input from 'components/input';

describe('Input', () => {
  let mountedInput;
  let input;

  beforeEach(() => {
    mountedInput = shallow(<Input />);
    input = mountedInput.find('input');
  });

  it('renders without crashing', () => {
    shallow(<Input />);
    expect(mountedInput).toMatchSnapshot();
  });

  it('expect to have button tag with default value', () => {
    expect(input).toHaveLength(1);
    expect(input.text()).toEqual('');
  });
});
