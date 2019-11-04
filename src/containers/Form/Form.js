import React, { PureComponent } from 'react';
import { TextField } from 'components/TextField/TextField';
import { Button } from 'components/Button/Button';
import { TextArea } from 'components/TextArea/TextArea';
import { Row } from 'components/Layout/Row';
import { StyledForm } from './Styled';

class Form extends PureComponent {
  state = {
    price: '',
    description: '',
  };

  onPriceChange = (e) => this.setState({ price: e.target.value });

  onDescriptionChange = (e) => this.setState({ description: e.target.value });

  render() {
    const { price, description } = this.state;

    return (
      <StyledForm>
        <Row>
          <TextArea
            placeholder="Введите описание"
            value={description}
            onChange={this.onDescriptionChange}
          />
        </Row>
        <Row>
          <TextField
            type="number"
            placeholder="Введите цену"
            value={price}
            onChange={this.onPriceChange}
          />
        </Row>
        <Row>
          <Button onClick={Function.prototype}>Добавить</Button>
        </Row>
      </StyledForm>
    );
  }
}

export { Form };
