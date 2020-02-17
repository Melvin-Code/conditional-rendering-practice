import React, { Component } from 'react';
import Form from './Form'
class UserChoice extends Component {
  choiceTrue = ()=> {
    this.setState(this.state.userIsRegistered = true
    )
    choicefalse =()=>{
    this.setState(this.state.userIsRegistered = false
    )
   } 

render(); {
        return (
            <div>
                 <button className='button' onClick={this.choiceTrue} >Login</button>
                 <Form />
                <br/>
                <button className='button' onClick={this.choicefalse}>Register</button>
                <Form />
            </div>
        );
    }
}

export default UserChoice;