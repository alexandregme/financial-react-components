import React from 'react';
import PropTypes from 'prop-types';
import Label from '../label';
import DatePicker from '../datepicker';
import './datepickerlabel.scss';

const DatePickerLabel = ({ identifier, text, name }) => (
  <div className="datepickerlabel">
    <Label htmlFor={identifier} className="bold" text={text} />
    <DatePicker
      id={identifier}
      name={name}
    />
  </div>
);

DatePickerLabel.propTypes = {
  identifier: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
};

DatePickerLabel.defaultProps = {
  identifier: null,
  text: null,
  name: '',
};

export default DatePickerLabel;
