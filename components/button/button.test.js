import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from 'components/button';

describe('Button', () => {
  let mountedButton;
  let button;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
    button = mountedButton.find('button');
  });

  it('renders without crashing', () => {
    shallow(<Button />);
    expect(mountedButton).toMatchSnapshot();
  });

  it('expect to have button a element', () => {
    expect(button).toHaveLength(1);
    expect(button.props().type).toEqual('button');
    expect(button.props().id).toBeNull();
    expect(button.props().className).toEqual('btn btn-default');
    expect(button.text()).toEqual('');
    expect(button.props().disabled).toEqual(false);
    expect(button.props().children).toEqual([null, '']);
  });

  it('expect the return to be undefined to default function handleClick', () => {
    expect(button.props().onClick()).toBe(undefined);
  });

  it('call a function passed to it when clicked', () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />);
    mountedButtonWithCallback.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe('Button custom props', () => {
  let mountedButton;
  let button;
  const props = {
    label: 'custom button',
    handleClick: () => 'custom handleClick',
    id: 'customId',
    className: 'className',
    disabled: true,
    children: <div />,
  };

  beforeEach(() => {
    mountedButton = mount(<Button {...props} />);
    button = mountedButton.find('button');
  });

  it('expect to set label with custom props', () => {
    expect(button.text()).toEqual(props.label);
  });

  it('expect handleClick to return custom handleClick', () => {
    expect(mountedButton.props().handleClick()).toBe(props.handleClick());
  });

  it('expect to add a custom id to btn', () => {
    expect(button.props().id).toEqual('customId');
  });

  it('expect to add a custom className to btn', () => {
    expect(button.props().className).toEqual('btn btn-default className');
  });

  it('expect to add a disabled property to btn', () => {
    expect(button.props().disabled).toEqual(props.disabled);
  });

  it('expect mountedButton to have a div children', () => {
    expect(mountedButton.props().children).toEqual(props.children);
  });
});
