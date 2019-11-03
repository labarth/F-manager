import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledTextField } from './Styled';

class TextField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.isRequired,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
  };

  static defaultProps = {
    name: null,
    placeholder: null,
    type: 'text',
    isRequired: false,
  };

  render() {
    const { placeholder, onChange, value, type, isRequired, name } = this.props;

    return (
      <StyledTextField
        name={name}
        isRequired={isRequired}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export { TextField };
