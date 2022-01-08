import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      /*
      {
        id: 1,
        name: "Abhay Chandel",
        email: "abhay15@gmail.com",
        phone: "1235678",
      },
      {
        id: 2,
        name: "Sachin Chandel",
        email: "sachin215@gmail.com",
        phone: "13975948",
      },
      {
        id: 3,
        name: "Aayushi",
        email: "aayaa24@gmail.com",
        phone: "152208",
      },
      */
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
