// import React from 'react';

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };
//   }
//   // here the local state is the user object


//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = Object.assign({}, this.state);
//     this.props.processForm(user);
//   }

//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div className="login-form-container">
//         <form onSubmit={this.handleSubmit} className="login-form-box">
//           <br />
//           {this.renderErrors()}
//           <div className="login-form">
//             <br />
//             <label>username:
//               <input type="text"
//                 value={this.state.username}
//                 onChange={this.update('username')}
//                 className="login-input"
//               />
//             </label>
//             <br />
//             <label>password:
//               <input type="password"
//                 value={this.state.password}
//                 onChange={this.update('password')}
//                 className="login-input"
//               />
//             </label>
//             <br />
//             <input className="session-submit" type="submit" value={this.props.formType} />
//           </div>
//         </form>
//       </div>
//     )
//   }
// };

import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    // this.handleDemov2 = this.handleDemov2.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal)
  }

  // handleDemo(e) {
  //   const demoUser = {
  //     username: 'demo_user', email: '', password: 'demo123'
  //   };
  //   this.state = demoUser;
  //   const intervalLength = 75;
  //   const timer = demoUser.username.length * intervalLength;
  //   this.totalTimer = timer + (demoUser.password.length * intervalLength) + 1000;
  //   this.typeInputInfo("username", demoUser.username, intervalLength);
  //   setTimeout(() => this.typeInputInfo("password", demoUser.password, intervalLength), timer)
  // }
  // typeInputInfo(field, value, intervalLength) {
  //   let incrementedValue = "";
  //   setInterval(() => {
  //     if (value.length > 0) {
  //       incrementedValue += value.slice(0, 1);
  //       value = value.slice(1);
  //       this.setState({ [field]: incrementedValue });
  //     } else {
  //       clearInterval();
  //     }
  //   }, intervalLength);
  // }    
  // }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { username: 'demo_user', email: '', password: 'demo123' };
    this.props.processForm(demoUser)
    .then(this.props.closeModal)
  }

  // handleDemov2(e) {
  //   e.preventDefault();
  //   const demoUser = { username: 'demo', email: "", password: 'hello123' };
  //   this.props.processForm(demoUser)
  // }

  renderErrors() {
    if (Array.from(this.props.errors).length > 0) {
      return (
      <ul>
        {(Array.from(this.props.errors)).map((error, i) => {
            return (
            <li className="errors" key={i}>
              {error}
            </li>
            )
        })
      }
      </ul>
      )
    }
    else {
      return null;
    }
    
  }

  render() {
    let username;
    let password;
    let email;
    let emailHTML;
    let demoButton;

    if (this.props.formType === "sign up") {
      username = "create a username";
      password = "create a password";
      email = "email";
      emailHTML = (
        < label >
        {/* { email } */}
        < input
          type = "text"
          value = { this.state.email }
          onChange = { this.update("email") }
          placeholder = "your email address"
            />
          </label >
      );
      demoButton = null;
      
    
    }
     else {
      username = "your username";
      password = "your password";
      demoButton = (
        <button onClick={this.handleDemo}>demo user</button>
      );
    }

    return (
      <div className="login-form-container">
        {/* <button className="demo-login"onClick={() => this.props.login({ username: "jmoney", password: "password" })}>Demo Login</button> */}
        <form className="login-form" onSubmit={this.handleSubmit}>
          
          <label>
            {/* {username} */}
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder={username}
            />
          </label>
          <br/>
            {emailHTML}
          <br/>
          <label>
            {/* {password} */}
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder={password}
            />
          </label>

          

          {this.renderErrors()}
          <br/>
          <input className="submit" type="submit" value={this.props.formType} />
          <br/>
          {demoButton}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);


// export default SessionForm;