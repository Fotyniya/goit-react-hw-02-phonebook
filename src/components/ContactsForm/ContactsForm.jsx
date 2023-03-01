import { Component } from "react";

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
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
      <form onSubmit={this.handleSubmit}>
      <label>
        Name
      <input type="text" name='name' value={this.state.name} onChange = {this.handleChange}/>
      </label>
      <label>
        Number
        <input type="tel" name='number' value={this.state.number} onChange = {this.handleChange}/>
      </label>
      <button type="submit">Add contact</button>
      </form>
    )
  }
}
// import { Formik, Field, Form } from 'formik';
// import { nanoid } from 'nanoid';
// import { FormField, FormContainer, Button, ErrorMessage } from './ContactsForm.styled'
// import * as Yup from 'yup';

// const ContactsFormSchema = Yup.object().shape({
//   name: Yup.string()
//   .min(2, 'Too Short!')
//   .max(50, 'Too Long!')
//   .required('Required'),
// });
// export const ContactsForm = ({onSubmit}) => {
// return <div>
//   <h1>Phonebook</h1>
// <FormContainer>
//     <Formik
//       initialValues={{
//         contacts: [],
//         name: '',
//       }}
//       validationSchema={ContactsFormSchema}
//       onSubmit={(values) => {
//         console.log(values)
//         onSubmit({
//           ...values,
//           id: nanoid(),
//         })
//       }}
//       >
//         <Form>
//             <FormField>
//                 Name
//                 <Field name="name" placeholder="Name"/>
//                 <ErrorMessage name="name" component='span'/>
//             </FormField>
            
//             <Button type="submit">Add contact</Button>
//         </Form>
//     </Formik>
    
// </FormContainer>
//   </div>
// }