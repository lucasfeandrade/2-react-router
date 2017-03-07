import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, "/");
    }
  render() {
    return (
        <div>
            <h1>KillerNews.net</h1>
            {this.props.children}

            <Link to="archives" class="btn btn-danger">archives</Link>
            <Link to="settings" class="btn btn-success">settings</Link>
            <button onClick={this.navigate.bind(this)}>featured</button>

        </div>
    );
  }
}