import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.scss';

const Button = ({
  label, handleClick, id, className, disabled, children,
}) => {
  const btnClassName = cx('btn', 'btn-default', className);

  return (
    <button
      type="button"
      onClick={handleClick}
      id={id}
      className={btnClassName}
      disabled={disabled}
    >
      {children}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element,
};

Button.defaultProps = {
  label: '',
  handleClick: () => {},
  id: null,
  className: '',
  disabled: false,
  children: null,
};

export default Button;
