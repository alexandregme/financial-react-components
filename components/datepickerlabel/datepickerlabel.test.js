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

  it('expect identifier htmlFor prop is null', () => {
    expect(label.props().htmlFor).toBeNull();
  });

  it('expect the text is empty', () => {
    expect(label.props().text).toBeNull();
  });

  it('expected to have DatePickerField component ', () => {
    expect(datePickerField).toHaveLength(1);
  });

  it('expect the id to be null', () => {
    expect(datePickerField.props().id).toBeUndefined();
  });

  it('expect date to be null', () => {
    expect(datePickerField.props().date).toBeNull();
  });

  it('expect handleOnDateChange to be undefined', () => {
    expect(datePickerField.props().handleOnDateChange()).toBeUndefined();
  });

  it('expect focused to be false', () => {
    expect(datePickerField.props().focused).toBeFalsy();
  });

  it('expect handleOnFocusChange to be undefined', () => {
    expect(datePickerField.props().handleOnFocusChange()).toBeUndefined();
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
    date: '2020-01-16T15:00:00.000Z',
    handleOnDateChange: () => 'onChange',
    focused: true,
    handleOnFocusChange: () => 'onFocus',
  };

  beforeEach(() => {
    mountedDatePickerLabel = shallow(<DatePickerLabel {...props} />);
    label = mountedDatePickerLabel.find(Label);
    datePickerField = mountedDatePickerLabel.find(DatePicker);
  });

  it('expect identifier htmlFor Label prop is customId', () => {
    expect(label.props().htmlFor).toEqual(props.identifier);
  });

  it('expect to set the text as customText', () => {
    expect(label.props().text).toEqual(props.text);
  });

  it('expect to set the identifier as customid to inputLabel', () => {
    expect(datePickerField.props().identifier).toEqual(props.identifier);
  });

  it('expect date to have custom value', () => {
    expect(datePickerField.props().date).toEqual(props.date);
  });

  it('expect onDateChange to have custom handleOnDateChange', () => {
    expect(datePickerField.props().handleOnDateChange()).toEqual(props.handleOnDateChange());
  });

  it('expect focused to have custom value', () => {
    expect(datePickerField.props().focused).toEqual(props.focused);
  });

  it('expect onFocusChange to have custom handleOnFocusChange', () => {
    expect(datePickerField.props().handleOnFocusChange()).toEqual(props.handleOnFocusChange());
  });
});
