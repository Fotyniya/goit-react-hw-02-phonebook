//import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { FormField, FormContainer, Button, ErrorMessage } from './ContactsForm.styled'
import * as Yup from 'yup';

const ContactsFormSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
});
export const ContactsForm = ({onSubmit}) => {
return <div>
  <h1>Phonebook</h1>
<FormContainer>
    <Formik
      initialValues={{
        contacts: [],
        name: '',
      }}
      validationSchema={ContactsFormSchema}
      onSubmit={(values) => {
        console.log(values)
        onSubmit({
          ...values,
          id: nanoid(),
        })
      }}
      >
        <Form>
            <FormField>
                Name
                <Field name="name" placeholder="Name"/>
                <ErrorMessage name="name" component='span'/>
            </FormField>
            <Button type="submit">Add contact</Button>
        </Form>
    </Formik>
    
</FormContainer>
  </div>
}