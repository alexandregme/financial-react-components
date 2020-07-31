import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './table.scss';

const Table = ({ children, className }) => {
  const tableClassName = cx('table table-striped table-hover', className);

  return (
    <div className="tablewrap">
      <table className={tableClassName}>
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

Table.defaultProps = {
  children: <thead />,
  className: '',
};

export default Table;
