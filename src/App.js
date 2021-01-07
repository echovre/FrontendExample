import React, { Component } from 'react';
//import React, { useState } from 'react';
import './App.css';
import { Redirect } from "react-router-dom";

class App extends Component {
  state = {
    amount:'',
    type:'',
    worth:'',
    income:'',
    credit:'',
    message:''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let formData={}
    formData.amount=this.state.amount
    formData.type=this.state.type
    formData.worth=this.state.worth
    formData.income=this.state.income
    formData.credit=this.state.credit
    let result=this.doFetch(formData)
    result.then((v)=>{
        console.log(v);
        if(v==="qualified"){
            //sign up page
            return <Redirect to="/ApplyPage" />
        }else{
            //reject page
            return <Redirect to="/ApplyPage" />
        }
        });
  }
  
  doFetch = (event) => {
      let url="/fake/url"
      console.log('Making fetch() request to:'+url);
      return new Promise((resolve, reject) => {
        if(event.amount>9000000){
          reject("Bad Request")
        }
        if(event.credit<600 ||
           event.amount >= event.income/5 ||
           event.amount>=event.worth*.03 ){
               let dequalMessage="Lorem Ipsem Youre Dequalified"
               resolve(dequalMessage)
        }else{
               resolve("qualified")
        }
      });
        /*
        var request = new XMLHttpRequest();
        request.open('POST', '/example/api/call', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(event));
        */
  }
 
  onAmountChange = (event) => {
    this.setState({ amount : event.target.value })
    if(event.target.value<=0){
        this.setState({ message : "Amount must be greater than zero." })
    }else{
        this.setState({ message : "" })
    }
    console.log(event.target.value);
  };

  onTypeChange = (event) => {
    this.setState({ type : event.target.value })
    console.log(event.target.value);
  };
  onWorthChange = (event) => {
    this.setState({ worth : event.target.value })
    console.log(event.target.value);
  };
  onIncomeChange = (event) => {
    this.setState({ income : event.target.value })
    console.log(event.target.value);
  };
  onCreditChange = (event) => {
    this.setState({ credit : event.target.value })
    if(event.target.value>=850 || event.target.value<=300){
         this.setState({ message : "Credit score must be between 300 and 850." })
    }else{
        this.setState({ message : "" })
    }
    console.log(event.target.value);
  };
  
render(){
  return(
    <div className="wrapper">
      <h1>Lorum Ipsem Lorum Ipsem</h1>

      <form onSubmit={this.handleSubmit}>
        <fieldset><label>
        
            <div className="myself"><br/>
            <div className="info">{this.state.message}</div><br/>
            
            <div className="property">Investment Amount:</div>
            <div className="value"><input type="number" name="amount" min="1" 
                value={this.state.amount} 
                onChange={this.onAmountChange} required/>
            </div><br/><br/>
            
            <div className="property">Investment Type:</div>
            <div className="value"><input type="text" name="type"
                 value={this.state.type}
                 onChange={this.onTypeChange} required/>
            </div><br/><br/>

            <div className="property">Total Net Worth </div>
            <div className="value"><input type="number" name="worth" 
                value={this.state.worth}
                onChange={this.onWorthChange} required/>
            </div><br/><br/>
            
            <div className="property">User Estimated Yearly Income </div>
            <div className="value"><input type="number" name="income" 
                value={this.state.income}
                onChange={this.onIncomeChange} required/>
            </div><br/><br/>
            
            <div className="property">User Estimated Credit Score </div>
            <div className="value"><input type="number" name="credit" min="300" max="850"
                 value={this.state.credit}
                 onChange={this.onCreditChange} required/>
            </div><br/><br/>
            
            </div>
            
        </label></fieldset><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default App;
