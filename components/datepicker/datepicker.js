import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import './datepicker.scss';

const DatePicker = () => (
  <SingleDatePicker
    onDateChange={() => {}}
    onFocusChange={() => {}}
    hideKeyboardShortcutsPanel
    showDefaultInputIcon
    numberOfMonths={1}
    verticalSpacing={0}
    openDirection="up"
    inputIconPosition="after"
  />
);

export default DatePicker;
