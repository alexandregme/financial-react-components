import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Alert = ({
  alertMessage, messageType, className, onButtonClick,
}) => {
  const typeClassName = messageType === 'success' ? 'alert-success' : 'alert-danger';
  const toasterClassName = cx('alert', className, typeClassName);

  return (
    <div className={toasterClassName} role="alert">
      <span className="message">{alertMessage}</span>
      <button type="button" className="close" onClick={onButtonClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Alert.propTypes = {
  alertMessage: PropTypes.string,
  messageType: PropTypes.string,
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
};

Alert.defaultProps = {
  alertMessage: '',
  messageType: '',
  className: '',
  onButtonClick: () => {},
};

export default Alert;
