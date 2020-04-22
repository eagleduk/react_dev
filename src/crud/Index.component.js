import React, { Component } from "react";
import Axios from "axios";
import TableRow from "./TableRow";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  componentDidMount() {
    Axios.get("http://localhost:4000/business")
      .then((res) => {
        this.setState({
          business: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  tabRow() {
    return this.state.business.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center"> Business List </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person</th>
              <th>Business</th>
              <th>GST Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
