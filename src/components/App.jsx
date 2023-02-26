import { Component } from "react";
import { Layout } from "components/Layout";
import { GlobalStyle } from "components/GlobalStyle";
import { ContactsForm } from "./ContactsForm/ContactsForm";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

addContact = newContact => {
  this.setState (prevState => {
    return {
      contacts: [...prevState.contacts, newContact],
    }
  });
};

  render(){
    return(
    <Layout> 
    <ContactsForm onSubmit={this.addContact}/>
    <GlobalStyle/>
    </Layout>
  )}
}
