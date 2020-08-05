import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const Input = ({
  id, name, handleOnChange, reference, lineIndex, magnifyingGlassHandleClick,
}) => (
  <div className="inputwrapper">
    <input
      className="input"
      id={id}
      name={name}
      onChange={handleOnChange}
      ref={reference}
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
  name: PropTypes.string,
  handleOnChange: PropTypes.func,
  reference: PropTypes.func,
  lineIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  magnifyingGlassHandleClick: PropTypes.func,
};

Input.defaultProps = {
  id: null,
  name: '',
  handleOnChange: () => {},
  reference: () => {},
  lineIndex: null,
  magnifyingGlassHandleClick: undefined,
};

export default Input;
