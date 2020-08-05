import React from 'react';
import PropTypes from 'prop-types';
import Select from '../select';
import Label from '../label';
import './selectlabel.scss';

const SelectLabel = ({
  identifier, text, options, concatLabelValue, reference,
}) => (
  <div className="selectlabel">
    <Label htmlFor={identifier} text={text} />
    <Select
      id={identifier}
      name={identifier}
      reference={reference}
      options={options}
      concatLabelValue={concatLabelValue}
    />
  </div>
);

SelectLabel.propTypes = {
  identifier: PropTypes.string,
  text: PropTypes.string,
  reference: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.isRequired,
    label: PropTypes.isRequired,
  })),
  concatLabelValue: PropTypes.bool,
};

SelectLabel.defaultProps = {
  identifier: null,
  text: null,
  reference: () => {},
  options: [{ value: '0', label: 'There Are No Options' }],
  concatLabelValue: false,
};

export default SelectLabel;
