import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const Input = ({
  name, handleOnChange, handleOnFocus, id, lineIndex, magnifyingGlassHandleClick,
}) => (
  <div className="inputwrapper">
    <input
      className="input"
      id={id}
      name={name}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
    />
    {magnifyingGlassHandleClick
        && (
        <Button
          className="magnifyingglass"
          id={lineIndex}
          handleClick={magnifyingGlassHandleClick}
        >
          <p>magnifyingGlassHandleClick</p>
        </Button>
        )}
  </div>
);

Input.propTypes = {
  id: PropTypes.string,
  lineIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  handleOnChange: PropTypes.func,
  handleOnFocus: PropTypes.func,
  magnifyingGlassHandleClick: PropTypes.func,
};

Input.defaultProps = {
  id: null,
  lineIndex: null,
  name: '',
  handleOnChange: () => {},
  handleOnFocus: () => {},
  magnifyingGlassHandleClick: null,
};

export default Input;
