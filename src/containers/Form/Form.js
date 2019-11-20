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

  onAddNote = () => {
    this.props.addNote({
      id: v4(),
      price: '123443312',
      description: 'blablabla',
    });
  }

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
          <Button onClick={this.onAddNote}>Добавить</Button>
        </Row>
      </StyledForm>
    );
  }
}

export { Form };
