import React from 'react';
import PropTypes from 'prop-types';
import Label from '../label';
import Input from '../input';
import './inputlabel.scss';

const InputLabel = ({
  identifier, text, handleOnChange, reference, lineIndex, magnifyingGlassHandleClick,

}) => (
  <div className="inputlabel">
    <Label htmlFor={identifier} text={text} />
    <Input
      id={identifier}
      name={identifier}
      handleOnChange={handleOnChange}
      reference={reference}
      lineIndex={lineIndex}
      magnifyingGlassHandleClick={magnifyingGlassHandleClick}
    />
  </div>
);

InputLabel.propTypes = {
  identifier: PropTypes.string,
  text: PropTypes.string,
  handleOnChange: PropTypes.func,
  reference: PropTypes.func,
  lineIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  magnifyingGlassHandleClick: PropTypes.func,
};

InputLabel.defaultProps = {
  identifier: null,
  text: null,
  handleOnChange: () => {},
  reference: () => {},
  lineIndex: null,
  magnifyingGlassHandleClick: undefined,
};

export default InputLabel;
