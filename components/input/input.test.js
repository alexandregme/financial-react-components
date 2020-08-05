import React from 'react';
import { shallow } from 'enzyme';
import Input from 'components/input';
import Button from 'components/button';

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

  it('expect to have input tag with type input', () => {
    expect(input).toHaveLength(1);
  });

  it('expect to have input wrapper div', () => {
    const inputWrapper = mountedInput.find('div');
    expect(inputWrapper).toHaveLength(1);
    expect(inputWrapper.props().className).toEqual('inputwrapper');
  });

  it('expect input className prop to be input', () => {
    expect(input.props().className).toEqual('input');
  });

  it('expect the return to be null to default id', () => {
    expect(input.props().id).toBeNull();
  });

  it('expect the return to be empty to default name', () => {
    expect(input.props().name).toEqual('');
  });

  it('expect the return to be undefined to default function handleChange', () => {
    expect(input.props().onChange()).toBeUndefined();
  });

  it('expect the return to be undefined to default function onFocus', () => {
    expect(input.props().onFocus()).toBeUndefined();
  });

  it('call a function passed to it when simulate change behavior', () => {
    const mockCallBack = jest.fn();
    const mountedInputWithCallback = shallow(<Input handleOnChange={mockCallBack} />);
    mountedInputWithCallback.find('input').simulate('change');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('call a function passed to it when simulate onfocus behavior', () => {
    const mockCallBack = jest.fn();
    const mountedInputWithCallback = shallow(<Input handleOnFocus={mockCallBack} />);
    mountedInputWithCallback.find('input').simulate('focus');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('expect input magnifyingGlassClick prop to be null', () => {
    expect(input.props().magnifyingGlassHandleClick).toBeUndefined();
  });
});

describe('Input with custom props', () => {
  let mountedInput;
  let input;

  const props = {
    name: 'custom name',
    id: 'custom id',
    lineIndex: 'custom lineIndex',
    handleOnChange: () => 'custom onChange',
    handleOnFocus: () => 'custom onFocus',
    magnifyingGlassHandleClick: () => 'magnifyingGlassHandleClick',
  };

  beforeEach(() => {
    mountedInput = shallow(<Input {...props} />);
    input = mountedInput.find('input');
  });

  it('expect the set custom name', () => {
    expect(input.props().name).toEqual(props.name);
  });

  it('expect the set custom id', () => {
    expect(input.props().id).toEqual(props.id);
  });

  it('expect onChange to return custom onChange', () => {
    expect(input.props().onChange()).toBe(props.handleOnChange());
  });

  it('expect onFocus to return custom onFocus', () => {
    expect(input.props().onFocus()).toBe(props.handleOnFocus());
  });

  it('expect input to have magnifyingGlassButton configuration with function', () => {
    const magnifyingGlassButton = mountedInput.find(Button);
    expect(magnifyingGlassButton).toHaveLength(1);
    expect(magnifyingGlassButton.props().id).toEqual(props.lineIndex);
    expect(magnifyingGlassButton.props().className).toEqual('magnifyingglass');
    expect(magnifyingGlassButton.props().handleClick()).toEqual(props.magnifyingGlassHandleClick());
  });

  it('expect to have an SVGIconMagnifyingGlass component ', () => {
    const svgIconMagnifyingGlass = mountedInput.find('p');
    expect(svgIconMagnifyingGlass).toHaveLength(1);
  });
});
