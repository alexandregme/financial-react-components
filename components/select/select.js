import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  id, name, options, concatLabelValue,
}) => (
  <select
    id={id}
    name={name}
    className="select"
  >
    {options.map((option) => (
      <option value={option.value} key={option.value}>
        {concatLabelValue ? `${option.value} ${option.label}` : option.label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  concatLabelValue: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.isRequired,
    label: PropTypes.isRequired,
  })),
};

Select.defaultProps = {
  id: null,
  name: '',
  concatLabelValue: false,
  options: [{ value: '0', label: 'There Are No Options' }],
};

export default Select;
