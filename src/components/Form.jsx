
import App from './App'
import React, { Component } from 'react';

class Form extends Component {
  register=()=>{
if (userIsRegistered) {
  <form>
   <input type="text" placeholder="Username" />; <input type="password" placeholder="Password" />; <input type="password" placeholder="Confirm Password" />;
   </form>
}   else { 
    <form>
     <input type="text" placeholder="Username" />;
      <input type="password" placeholder="Password" />
      </form>
}    
      
}
  render() {
    return (
      <div>
        {this.register()}
      </div>
    );
  }
}

export default Form;

