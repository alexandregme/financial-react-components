import React from 'react';
import { shallow } from 'enzyme';
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
    expect(singleDatePicker.props().date).toEqual(null);
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
