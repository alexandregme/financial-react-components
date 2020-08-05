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

  it('expect to have button a element wish default configurations', () => {
    expect(button).toHaveLength(1);
    expect(button.props().className).toEqual('btn btn-default');
    expect(button.props().id).toBeNull();
    expect(button.props().type).toEqual('button');
    expect(button.props().disabled).toEqual(false);
    expect(button.props().children).toEqual([null, '']);
    expect(button.text()).toEqual('');
  });

  it('expect the return to be undefined to default function handleClick', () => {
    expect(button.props().onClick()).toBe(undefined);
  });

  it('call a function passed to button when user hit click', () => {
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
    className: 'className',
    id: 'customId',
    disabled: true,
    type: 'submit',
    handleClick: () => 'custom handleClick',
    children: <div />,
    text: 'custom text button',
  };

  beforeEach(() => {
    mountedButton = mount(<Button {...props} />);
    button = mountedButton.find('button');
  });

  it('expect to add a custom className', () => {
    expect(button.props().className).toEqual('btn btn-default className');
  });

  it('expect to add a custom id', () => {
    expect(button.props().id).toEqual(props.id);
  });

  it('expect to add a custom type', () => {
    expect(button.props().type).toEqual(props.type);
  });

  it('expect to add a disabled property to btn', () => {
    expect(button.props().disabled).toEqual(props.disabled);
  });

  it('expect handleClick to return custom handleClick', () => {
    expect(mountedButton.props().handleClick()).toBe(props.handleClick());
  });

  it('expect mountedButton to have a div children', () => {
    expect(mountedButton.props().children).toEqual(props.children);
  });

  it('expect to set text with custom props', () => {
    expect(button.text()).toEqual(props.text);
  });
});
