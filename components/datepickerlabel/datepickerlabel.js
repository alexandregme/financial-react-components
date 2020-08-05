import React from 'react';
import PropTypes from 'prop-types';
import Label from '../label';
import DatePicker from '../datepicker';
import './datepickerlabel.scss';

const DatePickerLabel = ({
  identifier, text, date, handleOnDateChange, focused, handleOnFocusChange,
}) => (
  <div className="datepickerlabel">
    <Label htmlFor={identifier} text={text} />
    <DatePicker
      identifier={identifier}
      date={date}
      handleOnDateChange={handleOnDateChange}
      focused={focused}
      handleOnFocusChange={handleOnFocusChange}
    />
  </div>
);

DatePickerLabel.propTypes = {
  identifier: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  handleOnDateChange: PropTypes.func,
  focused: PropTypes.bool,
  handleOnFocusChange: PropTypes.func,
};

DatePickerLabel.defaultProps = {
  identifier: null,
  text: null,
  date: null,
  handleOnDateChange: () => {},
  focused: false,
  handleOnFocusChange: () => {},
};

export default DatePickerLabel;
