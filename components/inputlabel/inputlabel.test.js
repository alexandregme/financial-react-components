import React from 'react';
import { shallow } from 'enzyme';
import InputLabel from 'components/inputlabel';
import Input from 'components/input';
import Label from 'components/label';

describe('InputLabel', () => {
  let mountedInputLabel;
  let input;
  let label;

  beforeEach(() => {
    mountedInputLabel = shallow(<InputLabel />);
    input = mountedInputLabel.find(Input);
    label = mountedInputLabel.find(Label);
  });

  it('renders without crashing', () => {
    shallow(<InputLabel />);
    expect(mountedInputLabel).toMatchSnapshot();
  });

  it('expect basic definition for styling', () => {
    expect(mountedInputLabel.find('div[className="inputlabel"]')).toHaveLength(1);
  });

  it('expect have one label Component', () => {
    expect(label).toHaveLength(1);
  });

  it('expect identifier ( htmlFor ) prop is null', () => {
    expect(label.props().htmlFor).toBeNull();
  });

  it('expect the text is empty', () => {
    expect(label.props().text).toBeNull();
  });

  it('expect the id to be null', () => {
    expect(input.props().id).toBeNull();
  });

  it('expect the name to be empty', () => {
    expect(input.props().name).toEqual('');
  });

  it('expect input handleOnChange prop to be null', () => {
    expect(input.props().handleOnChange).toBeNull();
  });

  it('expect input lineIndex prop to be null', () => {
    expect(input.props().lineIndex).toBeNull();
  });

  it('expect input magnifyingGlassHandleClick prop to be null', () => {
    expect(input.props().magnifyingGlassHandleClick).toBeNull();
  });
});

describe('InputLabel with custom props', () => {
  let mountedInputLabel;
  let input;
  let label;

  const props = {
    identifier: 'customId',
    text: 'customText',
    name: 'customName',
    handleOnChange: () => 'handleOnChange',
    lineIndex: 'lineIndex',
    magnifyingGlassHandleClick: () => 'magnifyingGlassClick',
  };

  beforeEach(() => {
    mountedInputLabel = shallow(<InputLabel {...props} />);
    label = mountedInputLabel.find(Label);
    input = mountedInputLabel.find(Input);
  });

  it('expect identifier ( htmlFor ) Label prop is customId', () => {
    expect(label.props().htmlFor).toEqual(props.identifier);
  });

  it('expect to set the text as customText', () => {
    expect(label.props().text).toEqual(props.text);
  });

  it('expect to set the identifier as customid to inputLabel', () => {
    expect(input.props().id).toEqual(props.identifier);
  });

  it('expect to set the name as customName to inputLabel', () => {
    expect(input.props().name).toEqual(props.name);
  });

  it('expect input to have handleOnChange configuration with function', () => {
    expect(input.props().handleOnChange()).toEqual(props.handleOnChange());
  });

  it('expect input lineIndex prop to be null', () => {
    expect(input.props().lineIndex).toEqual(props.lineIndex);
  });
  it('expect input to have magnifyingGlassHandleClick configuration with function', () => {
    expect(input.props().magnifyingGlassHandleClick()).toEqual(props.magnifyingGlassHandleClick());
  });
});
