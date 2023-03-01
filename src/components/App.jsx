import { Component } from "react";
import { nanoid } from 'nanoid';
import { Layout } from "components/Layout";
import { GlobalStyle } from "components/GlobalStyle";
import { ContactsForm } from "./ContactsForm/ContactsForm";
//import { ContactsForm } from "./ContactsForm/ContactsForm";
//import {ContactsList} from "./Contacts/ContactsList"

const INITIAL_STATE = {
  contacts: [],
    name: '',
    number: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

formSubmitHandler = data => {
  console.log(data)
  this.setState ({
    name: data.name,
    number: data.number,
    contacts: [this.name = data.name, this.id = nanoid()]

  })
};

  render(){
    return(
    <Layout> 
      <ContactsForm onSubmit = {this.formSubmitHandler}/>
    <GlobalStyle/>
    </Layout>
  )}
}
// export class App extends Component {
//   state = { ...INITIAL_STATE };

// addContact = newContact => {
//   this.setState (prevState => {
//     return {
//       contacts: [...prevState.contacts, newContact],
//     }
//   });
// };

//   render(){
//     return(
//     <Layout> 
//     <ContactsForm onSubmit={this.addContact}/>
//     <ContactsList contacts={this.state.contacts}/>
//     <GlobalStyle/>
//     </Layout>
//   )}
// }
