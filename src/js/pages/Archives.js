import React from "react";

export default class Archives extends React.Component {
  render() {
    //console.log(this.props); //This props comes from the url param defined at client.js
      const { query } = this.props.location;
      const { params } = this.props;
      const { article } = params;
      const { date, filter } = query;
      return (
          <div>
             <h1>Archives ({article})</h1>
             <h4>date: {date}, filter: {filter}</h4>
          </div>
    );
  }
}