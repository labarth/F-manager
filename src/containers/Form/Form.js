import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import * as notesActions from 'containers/List/actions';
import { TextField } from 'components/TextField/TextField';
import { Button } from 'components/Button/Button';
import { TextArea } from 'components/TextArea/TextArea';
import { Row } from 'components/Layout/Row';
import { StyledForm } from './Styled';


@connect(null, { addNote: notesActions.ADD_NOTE_REQUEST })
class Form extends PureComponent {
  static propTypes = {
    addNote: PropTypes.func.isRequired,
  };

  state = {
    price: '',
    description: '',
  };

  onAddNote = (e) => {
    e.preventDefault();
    const { price, description } = this.state;

    this.props.addNote({
      id: v4(),
      price,
      description,
    });
  }

  onPriceChange = (e) => this.setState({ price: e.target.value.replace(/[A-Za-z_,()]/g, '') });

  onDescriptionChange = (e) => this.setState({ description: e.target.value });

  render() {
    const { price, description } = this.state;

    return (
      <StyledForm onSubmit={this.onAddNote}>
        <Row>
          <TextArea
            placeholder="Введите описание"
            value={description}
            onChange={this.onDescriptionChange}
            required
          />
        </Row>
        <Row>
          <TextField
            placeholder="Введите цену"
            value={price}
            onChange={this.onPriceChange}
            required
          />
        </Row>
        <Row>
          <Button type="submit">Добавить</Button>
        </Row>
      </StyledForm>
    );
  }
}

export { Form };
