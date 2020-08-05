import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.scss';

const Button = ({
  className,
  id,
  type,
  disabled,
  handleClick,
  children,
  text,
}) => {
  const btnClassName = cx('btn', 'btn-default', className);

  return (
    <button
      className={btnClassName}
      id={id}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.element,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  id: null,
  disabled: false,
  type: 'button',
  handleClick: () => {},
  children: null,
  text: '',
};

export default Button;
