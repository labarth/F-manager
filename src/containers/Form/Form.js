import React, { PureComponent } from 'react';
import { TextField } from 'components/TextField/TextField';
import { Button } from 'components/Button/Button';
import { TextArea } from 'components/TextArea/TextArea';
import { Row } from 'components/Layout/Row';
import { StyledForm } from './Styled';

class Form extends PureComponent {
  render() {
    return (
      <StyledForm>
        <Row>
          <TextArea placeholder="Введите описание" />
        </Row>
        <Row>
          <TextField type="number" placeholder="Введите цену" />
        </Row>
        <Row>
          <Button>Добавить</Button>
        </Row>
      </StyledForm>
    );
  }
}

export { Form };
