import React from 'react';
import { shallow } from 'enzyme';
import SelectLabel from 'components/selectlabel';
import Select from 'components/select';
import Label from 'components/label';

describe('SelectLabel', () => {
  let mountedSelectLabel;
  let select;
  let label;

  beforeEach(() => {
    mountedSelectLabel = shallow(<SelectLabel />);
    select = mountedSelectLabel.find(Select);
    label = mountedSelectLabel.find(Label);
  });

  it('renders without crashing', () => {
    expect(mountedSelectLabel).toMatchSnapshot();
  });

  it('expect basic definition for styling', () => {
    expect(mountedSelectLabel.find('div[className="selectlabel"]')).toHaveLength(1);
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

  it('expect have one label Component', () => {
    expect(select).toHaveLength(1);
  });

  it('expect the id to be null', () => {
    expect(select.props().id).toBeNull();
  });

  it('expect select name prop to be empty', () => {
    expect(select.props().name).toBeNull();
  });

  it('expect the reference of the select to be undefined', () => {
    expect(select.props().reference()).toBeUndefined();
  });

  it('expect select to receive default props for options', () => {
    expect(select.props().options).toEqual([{ label: 'There Are No Options', value: '0' }]);
  });

  it('expect select concatLabelValue prop to be false', () => {
    expect(select.props().concatLabelValue).toBeFalsy();
  });
});

describe('SelectLabel with custom props', () => {
  const ref = React.createRef();
  let mountedSelectLabel;
  let select;
  let label;
  const options = [{
    value: '1',
    label: 'option 1',
  }, {
    value: '2',
    label: 'option 2',
  }, {
    value: '3',
    label: 'option 3',
  }];

  const props = {
    identifier: 'customId',
    text: 'customText',
    name: 'customName',
    reference: jest.fn(() => ref),
    options,
    concatLabelValue: true,
  };

  beforeEach(() => {
    mountedSelectLabel = shallow(<SelectLabel {...props} />);
    label = mountedSelectLabel.find(Label);
    select = mountedSelectLabel.find(Select);
  });

  it('expect identifier htmlFor Label prop is customId', () => {
    expect(label.props().htmlFor).toEqual(props.identifier);
  });

  it('expect to set the text as customText', () => {
    expect(label.props().text).toEqual(props.text);
  });

  it('expect to set the identifier as customId to selectLabel', () => {
    expect(select.props().id).toEqual(props.identifier);
  });

  it('expect to set the name as a custom identifier', () => {
    expect(select.props().name).toEqual(props.identifier);
  });

  it('expect the reference to have a custom reference passed throw props', () => {
    expect(select.props().reference).toBe(props.reference);
  });

  it('expect select to receive custom options', () => {
    expect(select.props().options).toEqual(props.options);
  });

  it('expect select concatLabelValue prop to be true', () => {
    expect(select.props().concatLabelValue).toBeTruthy();
  });
});
