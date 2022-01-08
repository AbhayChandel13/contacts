import React, { Component } from 'react'

class test extends Component {

        state={
           email:'',
           phone:''
        };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>this.setState({email:data.email,phone:data.phone }));
    }
    


    render() {
        const{email,phone}=this.state;
        return (
            <div>
               <h1> {email} </h1><h1> {phone}  </h1> 
                
            </div>
        );
    }
}
export default test;