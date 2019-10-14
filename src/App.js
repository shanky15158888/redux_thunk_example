import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from "./userInfo";
import { thunk_action_creator, fetch_post } from "./actions/fetchAction";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    console.log(username);
    this.props.dispatch(thunk_action_creator(username));
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Enter the Github Username</h2>
          <input
            type="text"
            placeholder="Enter Github Username"
            required
            ref={input => (this.getUsername = input)}
          />
          <button className="button">Submit</button>
        </form>
        {
          this.props.data.isFetching && <h3>Loading...</h3>
        }
        {
          this.props.data.isError &&
          <h3 className="error">No such User exists.</h3>
        }
        {
          Object.keys(this.props.data.userData).length > 0 &&
          <UserInfo user={this.props.data.userData} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App);