import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  /*
  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts: newContacts,
    });
  };

  */

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div>
                {contacts.map((contact) => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    /*deleteClickHandler={this.deleteContact.bind(
                      this,
                      contact.id
                    )}
                    */
                  />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
