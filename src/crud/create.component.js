import React, { Component } from "react";
import Axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      person_name: "",
      business_name: "",
      business_gst_number: "",
    };
  }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value,
    });
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
    };

    Axios.post("http://localhost:4000/business/add", obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      person_name: "",
      business_name: "",
      business_gst_number: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Add Person Name: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangePersonName}
              value={this.state.person_name}
            />
          </div>
          <div className="form-group">
            <label> Add Business Name: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeBusinessName}
              value={this.state.business_name}
            />
          </div>
          <div className="form-group">
            <label> Add GST Number: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeGstNumber}
              value={this.state.business_gst_number}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
