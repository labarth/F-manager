import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledTextArea } from './Styled';

class TextArea extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool,
    name: PropTypes.isRequired,
  };

  static defaultProps = {
    placeholder: null,
    isRequired: false,
    name: null,
  };

  render() {
    const { placeholder, value, isRequired, name } = this.props;

    return (
      <StyledTextArea
        placeholder={placeholder}
        isRequired={isRequired}
        name={name}
      >
        {value}
      </StyledTextArea>
    );
  }
}

export { TextArea };
