import React, { Component } from "react";

class AddContact extends Component {

constructor(props){
super(props);
this.nameInput=React.createRef();
this.emailInput=React.createRef();
this.phoneInput=React.createRef();
}

  static defaultProps = {
    name: "Ajay Mehra",
    email: "mehra1902@gmail.com",
    phone: "9237201",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const contact={
        name:this.nameInput.current.value,
        email:this.emailInput.current.value,
        phone:this.phoneInput.current.value
    }
    console.log (contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="Name"
                className="form-control from-control-lg"
                placeholder="Enter Name"
                ref={this.nameInput}
                defaultValue={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control from-control-lg"
                placeholder="Enter Email"
                ref={this.emailInput}
                defaultValue={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control from-control-lg"
                placeholder="Enter Number"
                ref={this.phoneInput}
                defaultValue={phone}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block bt-light"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
