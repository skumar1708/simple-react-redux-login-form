import React, { Component } from "react";
import * as ac from "./Actions";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: "",
      email: "",
      label: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("from props", props.data.app.user);
    // console.log("from state", state.userinfo);
    if (props.app.user !== state.user) {
      console.log(props);
      return {
        userinfo: props.app.user,
        email: props.app.email,
        label: props.app.user
      };
    }
    return null;
  }

  saveForm = () => {
    this.props.dispatch(
      ac.saveInfo({ user: this.state.userinfo, email: this.state.email })
    );
  };

  changeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  render() {
    return [
      <div key>
        <span>
          Username:
          <input
            type="text"
            name="username"
            onBlur={evt => {
              return this.changeHandler("userinfo", evt.currentTarget.value);
            }}
          />
        </span>
        <br />
        <span>
          Email:
          <input
            type="text"
            name="email"
            onBlur={evt => {
              return this.changeHandler("email", evt.currentTarget.value);
            }}
          />
        </span>
        <br />
        <button type="submit" onClick={this.saveForm}>
          Save
        </button>
        <p>{this.state.label}</p>
      </div>
    ];
  }
}

export default connect(state => {
  return {
    ...state
  };
})(Form);
