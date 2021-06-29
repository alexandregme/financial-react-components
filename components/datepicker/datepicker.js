import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './datepicker.scss';

const DatePicker = ({
  identifier, date, handleOnDateChange, focused, handleOnFocusChange,
}) => (
  <SingleDatePicker
    id={identifier}
    date={moment(date)}
    onDateChange={handleOnDateChange}
    focused={focused}
    onFocusChange={handleOnFocusChange}
    hideKeyboardShortcutsPanel
    showDefaultInputIcon
    numberOfMonths={1}
    verticalSpacing={0}
    openDirection="up"
    inputIconPosition="after"
  />
);

DatePicker.propTypes = {
  identifier: PropTypes.string,
  date: PropTypes.string,
  handleOnDateChange: PropTypes.func,
  focused: PropTypes.bool,
  handleOnFocusChange: PropTypes.func,
};

DatePicker.defaultProps = {
  identifier: '',
  date: '2020-01-01T01:00:00.000Z',
  handleOnDateChange: () => {},
  focused: false,
  handleOnFocusChange: () => {},
};

export default DatePicker;
