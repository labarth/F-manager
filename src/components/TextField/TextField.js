import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledTextField } from './Styled';

class TextField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  };

  static defaultProps = {
    name: null,
    placeholder: null,
    type: 'text',
    required: false,
  };

  render() {
    const {
      placeholder, onChange, value, type, required, name,
    } = this.props;

    return (
      <StyledTextField
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export { TextField };
