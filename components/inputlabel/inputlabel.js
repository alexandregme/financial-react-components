import React from 'react';
import PropTypes from 'prop-types';
import Label from '../label';
import Input from '../input';
import './inputlabel.scss';

const InputLabel = ({
  identifier, text, name, handleOnChange, lineIndex, magnifyingGlassHandleClick,
}) => (
  <div className="inputlabel">
    <Label htmlFor={identifier} className="bold" text={text} />
    <Input
      id={identifier}
      lineIndex={lineIndex}
      name={name}
      magnifyingGlassHandleClick={magnifyingGlassHandleClick}
      handleOnChange={handleOnChange}
    />
  </div>
);

InputLabel.propTypes = {
  identifier: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  handleOnChange: PropTypes.func,
  lineIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  magnifyingGlassHandleClick: PropTypes.func,
};

InputLabel.defaultProps = {
  identifier: null,
  text: null,
  name: '',
  handleOnChange: null,
  lineIndex: null,
  magnifyingGlassHandleClick: null,
};

export default InputLabel;
