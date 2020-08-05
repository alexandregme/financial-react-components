import React from 'react';
import { shallow, mount } from 'enzyme';
import Label from 'components/label';

describe('Label', () => {
  let mountedLabel;
  let label;

  beforeEach(() => {
    mountedLabel = shallow(<Label />);
    label = mountedLabel.find('label');
  });

  it('renders without crashing', () => {
    shallow(<Label />);
    expect(mountedLabel).toMatchSnapshot();
  });

  it('Contains a label element with custon props', () => {
    expect(label).toHaveLength(1);
    expect(label.prop('className')).toEqual('label');
    expect(label.props().htmlFor).toBeNull();
    expect(label.text()).toEqual('');
  });
});

describe('Label custom props', () => {
  let mountedLabel;
  let label;

  const props = {
    htmlFor: 'customId',
    text: 'custom label',
    children: <div />,
    className: 'custom',
  };

  beforeEach(() => {
    mountedLabel = mount(<Label {...props} />);
    label = mountedLabel.find('label');
  });

  it('should receive a prop htmlFor and show it as htmlFor', () => {
    expect(label.props().htmlFor).toEqual(props.htmlFor);
  });

  it('should receive a prop text and show it as label', () => {
    expect(label.text()).toEqual(props.text);
  });

  it('expect to add a custom className to label', () => {
    expect(label.prop('className')).toEqual('label custom');
  });

  it('expect label have a input children with custom Id', () => {
    expect(mountedLabel.props().children).toEqual(props.children);
  });
});
