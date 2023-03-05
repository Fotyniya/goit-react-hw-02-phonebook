import { nanoid } from "nanoid";
import { Component } from "react";
import {FormContainer, FormLabel } from "../ContactsForm/ContactsForm.styled"

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      id: nanoid(),
    })
  };

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    this.props.onSubmit (this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render () {
    return (
      
      <FormContainer onSubmit={this.handleSubmit}>
      <FormLabel>
        Name
      <input type="text" name='name' value={this.state.name} onChange = {this.handleChange}/>
      </FormLabel>
      <FormLabel>
        Number
        <input type="tel" name='number' value={this.state.number} onChange = {this.handleChange}/>
      </FormLabel>
        <button type="submit">Add contact</button>
      </FormContainer>
    )
  }
}
