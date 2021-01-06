import React, { Component } from 'react';
import './App.css';
  
class  extends Component {
      state = {
      email:'',
      password:'',
      password2:'',
      message:''
  }

  encrypt = (event) => {
    //TODO
  }

  hasNumberOrChar = (event) => {
    var matches = event.match(/\d+/g);
    if (matches != null) {
        return true;
    }
    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    for (var i = 0; i < chkfile.value.length; i++){
      if (iChars.indexOf(chkfile.value.charAt(i)) != -1)  {
          return true;
      }
     return false;
    }
  }
  
  pwLength = (event) => {
    return event.length>=8;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if(!this.hasNumberOrChar(password)){
        this.setState({ message : "Password must contain at least one number or special character" })
    }else if(!this.pwLength(password)){
        this.setState({ message : "Password must be at least 8 characters" })
    }else{
        
        let formData={}
        formData.email=this.state.email
        formData.password=encrypt(this.state.password)

        let payload=JSON.stringify(formData)
        console.log(payload)

        var request = new XMLHttpRequest();
        request.open('POST', '/example/api/call', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(payload);
    }
 }
 
  onEmailChange = (event) => {
    this.setState({ email : event.target.value })
    if(event.target.value.contains("@") && event.target.value.contains(".")){
        this.setState({ message : "" })
    }else{
        this.setState({ message : "Invalid email address." })
    }
    console.log(event.target.value);
  };
  onPasswordChange = (event) => {
    this.setState({ password : event.target.value })
    if(password2!=password){
        this.setState({ message : "Passwords dont match." })
    }else{
        this.setState({ message : "" })
    }
    console.log(event.target.value);
  };
  onPassword2Change = (event) => {
    this.setState({ password2 : event.target.value })
    if(password2!=password){
        this.setState({ message : "Passwords dont match." })
    }else{
        this.setState({ message : "" })
    }
    console.log(event.target.value);
  };
  
render(){
  return(
    <div className="wrapper">
      <h1>Lorum Ipsem Youve Qualified Lorum Ipsem</h1>

      <form onSubmit={this.handleSubmit}>
        <fieldset><label>
        
            <div className="myself"><br/>
            <div className="info">{this.state.message}</div><br/>
            
            <div className="property">Email:</div>
            <div className="value"><input type="email" name="email" 
                value={this.state.email} 
                onChange={this.onEmailChange} required/>
            </div><br/><br/>
            
            <div className="property">Password:</div>
            <div className="value"><input type="password" name="password"
                 value={this.state.password}
                 onChange={this.onPasswordChange} required/>
            </div><br/><br/>

            <div className="property">Confirm Password: </div>
            <div className="value"><input type="password" name="password2" 
                value={this.state.password2}
                onChange={this.onPassword2Change} required/>
            </div><br/><br/>
            
            </div>
            
        </label></fieldset><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default Apply;
