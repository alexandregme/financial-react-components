import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import SVGIconX from '../assets/svgs/icon-x.svg';
import './modal.scss';

const Modal = ({
  show, title, handleClose, children,
}) => (
  <>
    {show
        && (
        <>
          <div className="modal-backdrop fade show" />
          <div className="modal fade show">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <Button className="btn-secondary close" handleClick={handleClose}>
                    <SVGIconX />
                  </Button>
                </div>
                <div className="modal-body">
                  {children}
                </div>
                <div className="modal-footer">
                  <Button className="btn-secondary" handleClick={handleClose} label="CANCEL" />
                </div>
              </div>
            </div>
          </div>
        </>
        )}
  </>
);

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.element,
};

Modal.defaultProps = {
  show: false,
  title: 'default title',
  handleClose: () => {},
  children: <span />,
};

export default Modal;
