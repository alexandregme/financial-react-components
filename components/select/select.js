import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  id, name, reference, options, concatLabelValue,
}) => (
  <select
    className="select"
    id={id}
    name={name}
    ref={reference}
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
  reference: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.isRequired,
    label: PropTypes.isRequired,
  })),
  concatLabelValue: PropTypes.bool,
};

Select.defaultProps = {
  id: null,
  name: '',
  reference: () => {},
  options: [{ value: '0', label: 'There Are No Options' }],
  concatLabelValue: false,
};

export default Select;
