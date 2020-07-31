import React from 'react';
import PropTypes from 'prop-types';
import SVGLoader from '../assets/svgs/spinner.svg';
import './loader.scss';

const Loader = ({ fetching, fetchingLocal, children }) => (
  <>
    {
      fetching && !fetchingLocal && (
        <div className="loader">
          { children ? <>{children}</> : <SVGLoader className="default-spinner" /> }
        </div>
      )
    }
  </>
);

Loader.propTypes = {
  fetching: PropTypes.bool,
  fetchingLocal: PropTypes.bool,
  children: PropTypes.element,
};

Loader.defaultProps = {
  fetching: false,
  fetchingLocal: false,
  children: null,
};

export default Loader;
