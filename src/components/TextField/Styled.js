import styled from 'styled-components';

export const StyledTextField = styled.input`
  min-height: 32px;
  padding: 0 12px;
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  outline: none;
  
  :focus {
    border-color: cornflowerblue;
  }
`;