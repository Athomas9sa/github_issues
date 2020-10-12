import React, { Component } from 'react';
import Issue from './Issue';
import './IssueStyles.css';

class IssueList extends Component {
  constructor(props){
    super(props);
    this.state = {
    issues: [],
    title: 'Issues List',
    userData: "issues",
    error:false,
    errorMessage: "",
    }
  };
  async componentDidMount() {
    try {
      const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
      //console.log(response)
      const data = await response.json();
      this.setState({
        userData: data,
      });
    }  catch (error) {
      this.setState({
        error: true,
        issues: error.message,
      });
    }
  } 
  render() {
    const { title, userData } = this.state;
    return (
      <>
        <header className="App-header">
            <h1>{title}</h1>
        </header>
        <body>
           <ul className="">
             {userData.length > 0 ? (userData.map((issue, index) => (<li className="" key={index}><Issue userData={issue} /></li>))) : (<li>No User Data</li>)}
          {userData.map((issue, index) => {
            return (<li className="" key={index}><Issue userData={issue} /></li>)
          })} 
          <ul>{result}</ul>
        </body>
      </>
     )
    }
  }

export default IssueList;
