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
    expect(select.props().name).toEqual('');
  });

  it('expect select concatLabelValue prop to be empty', () => {
    expect(select.props().concatLabelValue).toBeFalsy();
  });

  it('expect select to receive default props', () => {
    expect(select.props().options).toEqual([{ label: 'There Are No Options', value: '0' }]);
  });
});

describe('SelectLabel with custom props', () => {
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
    concatLabelValue: true,
    options,
  };

  beforeEach(() => {
    mountedSelectLabel = shallow(<SelectLabel {...props} />);
    label = mountedSelectLabel.find(Label);
    select = mountedSelectLabel.find(Select);
  });

  it('expect identifier ( htmlFor ) Label prop is customId', () => {
    expect(label.props().htmlFor).toEqual(props.identifier);
  });

  it('expect to set the text as customText', () => {
    expect(label.props().text).toEqual(props.text);
  });

  it('expect to set the identifier as customId to selectLabel', () => {
    expect(select.props().id).toEqual(props.identifier);
  });

  it('expect to set the name as customName', () => {
    expect(select.props().name).toEqual('customName');
  });

  it('expect select concatLabelValue prop to be empty', () => {
    expect(select.props().concatLabelValue).toBeTruthy();
  });

  it('expect select to receive custom props', () => {
    expect(select.props().options).toEqual(props.options);
  });
});
