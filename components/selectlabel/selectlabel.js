import React from 'react';
import PropTypes from 'prop-types';
import Select from '../select';
import Label from '../label';
import './selectlabel.scss';

const SelectLabel = ({
  identifier, name, text, options, concatLabelValue,
}) => (
  <div className="selectlabel">
    <Label htmlFor={identifier} className="bold" text={text} />
    <Select id={identifier} name={name} options={options} concatLabelValue={concatLabelValue} />
  </div>
);

SelectLabel.propTypes = {
  identifier: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  concatLabelValue: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.isRequired,
    label: PropTypes.isRequired,
  })),
};

SelectLabel.defaultProps = {
  identifier: null,
  name: '',
  text: null,
  concatLabelValue: false,
  options: [{ value: '0', label: 'There Are No Options' }],
};

export default SelectLabel;
