import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import DatePicker from 'components/datepicker';

describe('DatePicker', () => {
  let mountedDatePicker;
  let singleDatePicker;

  beforeEach(() => {
    mountedDatePicker = shallow(<DatePicker />);
    singleDatePicker = mountedDatePicker.find(SingleDatePicker);
  });

  it('renders without crashing', () => {
    shallow(<DatePicker />);
    expect(mountedDatePicker).toMatchSnapshot();
  });

  it('expect to have SingleDatePicker component', () => {
    expect(singleDatePicker).toHaveLength(1);
    expect(singleDatePicker.props().id).toEqual('');
    expect(singleDatePicker.props().date).toEqual(moment('2020-01-01T01:00:00.000Z'));
    expect(singleDatePicker.props().onDateChange()).toBeUndefined();
    expect(singleDatePicker.props().focused).toBeFalsy();
    expect(singleDatePicker.props().onFocusChange()).toBeUndefined();
    expect(singleDatePicker.props().showDefaultInputIcon).toEqual(true);
    expect(singleDatePicker.props().hideKeyboardShortcutsPanel).toEqual(true);
    expect(singleDatePicker.props().numberOfMonths).toEqual(1);
    expect(singleDatePicker.props().verticalSpacing).toEqual(0);
    expect(singleDatePicker.props().openDirection).toEqual('up');
    expect(singleDatePicker.props().inputIconPosition).toEqual('after');
  });
});

describe('DatePicker custom props', () => {
  let mountedDatePicker;

  const props = {
    identifier: 'identifier',
    date: '2020-01-16T15:00:00.000Z',
    handleOnDateChange: () => 'onChange',
    focused: true,
    handleOnFocusChange: () => 'onFocus',
  };

  beforeEach(() => {
    mountedDatePicker = shallow(<DatePicker {...props} />);
  });

  it('expect id to have custom value', () => {
    expect(mountedDatePicker.props().id).toEqual(props.identifier);
  });

  it('expect date to have custom value', () => {
    expect(mountedDatePicker.props().date).toEqual(moment(props.date));
  });

  it('expect onDateChange to have custom handleOnDateChange', () => {
    expect(mountedDatePicker.props().onDateChange()).toEqual(props.handleOnDateChange());
  });

  it('expect focused to have custom value', () => {
    expect(mountedDatePicker.props().focused).toEqual(props.focused);
  });

  it('expect onFocusChange to have custom handleOnFocusChange', () => {
    expect(mountedDatePicker.props().onFocusChange()).toEqual(props.handleOnFocusChange());
  });
});
