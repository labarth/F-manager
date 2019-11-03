import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  min-height: 64px;
  padding: 12px;
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  outline: none;
  resize: none;
  
  :focus {
    border-color: cornflowerblue;
  }
`;