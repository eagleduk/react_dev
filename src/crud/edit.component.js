import React, { Component } from "react";
import Axios from "axios";

export default class Edit extends Component {
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

  componentDidMount() {
    Axios.get(
      "http://localhost:4000/business/edit/" + this.props.match.params.id
    )
      .then((res) => {
        console.log(res);
        this.setState({
          person_name: res.data.person_name,
          business_name: res.data.business_name,
          business_gst_number: res.data.business_gst_number,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

    Axios.post(
      "http://localhost:4000/business/update/" + this.props.match.params.id,
      obj
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/index");
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Edit Business</h3>
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
              value="Update Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
