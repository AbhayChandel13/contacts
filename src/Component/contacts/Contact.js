import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from 'axios';
import { Link } from "react-router-dom";

class Contact extends Component {
  /* constructor() { 
    super();
    this.state = {};
    this.onShowClick = this.onShowClick.bind(this);
  }
  */

  static propTypes = {
    contact: PropTypes.object.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired,
  };

  state = { showContactInfo: false };
  /*onShowClick=e=> {
    this.setState=({showContactInfo:!this.state.showContactInfo});
  };
  */
  onDeleteClick = async(id, dispatch) => {
   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 ">
              <h3>
                {name}
                {""}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-caret-down"
                  style={{ cursor: "Pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "Pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contacts/edit/${id}`}>
                  <i className="fas fa-pencil-alt"
                    style={{
                      cursor:"Pointer",
                      float:"right",
                      color:"black",
                      marginRight:'1rem'
                    }}
                  />
                </Link>
              </h3>

              {showContactInfo ? (
                <ul className="list-group ">
                  <li className="list-group-item ">
                    Email:{email}
                  </li>
                  <li className="list-group-item ">
                    Phone:{phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
/* // This is just another way of declaring the propTypes decalared  above i.e.static....
Contact.propTypes={           
 name:PropTypes.string.isRequired,
 email:PropTypes.string.isRequired,
 phone:PropTypes.string.isRequired,
 
};
*/

export default Contact;
