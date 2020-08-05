import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Label = ({
  htmlFor, text, children, className,
}) => {
  const labelClassName = cx('label', className);

  return (
    <label
      htmlFor={htmlFor}
      className={labelClassName}
    >
      {children}
      {text}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.element,
  className: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: null,
  text: '',
  children: null,
  className: '',
};

export default Label;
