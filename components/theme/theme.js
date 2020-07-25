import React from 'react';
import PropTypes from 'prop-types';
import './theme.scss';

const Theme = ({ children }) => (
  <>
    {children}
  </>
);

Theme.propTypes = {
  children: PropTypes.element,
};

Theme.defaultProps = {
  children: <div />,
};

export default Theme;
