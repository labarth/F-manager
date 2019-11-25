import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledTextArea } from './Styled';

class TextArea extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
  };

  static defaultProps = {
    placeholder: null,
    required: false,
    name: null,
  };

  render() {
    const {
      placeholder, value, required, name, onChange,
    } = this.props;

    return (
      <StyledTextArea
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
      />
    );
  }
}

export { TextArea };
