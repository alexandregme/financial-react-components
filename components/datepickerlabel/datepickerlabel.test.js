import React from 'react';
import { shallow } from 'enzyme';
import DatePickerLabel from 'components/datepickerlabel';
import Label from 'components/label';
import DatePicker from 'components/datepicker';

describe('DatePickerLabel', () => {
  let mountedDatePickerLabel;
  let label;
  let datePickerField;

  beforeEach(() => {
    mountedDatePickerLabel = shallow(<DatePickerLabel />);
    label = mountedDatePickerLabel.find(Label);
    datePickerField = mountedDatePickerLabel.find(DatePicker);
  });

  it('renders without crashing', () => {
    shallow(<DatePickerLabel />);
    expect(mountedDatePickerLabel).toMatchSnapshot();
  });

  it('expect basic definition for styling', () => {
    expect(mountedDatePickerLabel.find('div[className="datepickerlabel"]')).toHaveLength(1);
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

  it('expected to have DatePickerField component ', () => {
    expect(datePickerField).toHaveLength(1);
  });

  it('expect the id to be null', () => {
    expect(datePickerField.props().id).toBeNull();
  });

  it('expect the name to be empty', () => {
    expect(datePickerField.props().name).toEqual('');
  });
});

describe('DatePickerLabel - custom props', () => {
  let mountedDatePickerLabel;
  let label;
  let datePickerField;

  const props = {
    identifier: 'customId',
    text: 'customText',
    name: 'customName',
  };

  beforeEach(() => {
    mountedDatePickerLabel = shallow(<DatePickerLabel {...props} />);
    label = mountedDatePickerLabel.find(Label);
    datePickerField = mountedDatePickerLabel.find(DatePicker);
  });

  it('expect identifier ( htmlFor ) Label prop is customId', () => {
    expect(label.props().htmlFor).toEqual(props.identifier);
  });

  it('expect to set the text as customText', () => {
    expect(label.props().text).toEqual(props.text);
  });

  it('expect to set the identifier as customid to inputLabel', () => {
    expect(datePickerField.props().id).toEqual(props.identifier);
  });

  it('expect to set the name as customName to inputLabel', () => {
    expect(datePickerField.props().name).toEqual(props.name);
  });
});
