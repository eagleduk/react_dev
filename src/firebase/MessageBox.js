import React from "react";
import trim from "trim";

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: "",
    };
  }
  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== "") {
      e.preventDefault();
      let dbCon = this.props.db.database().ref("/messages");
      dbCon.push({
        message: trim(e.target.value),
      });
      this.setState({
        message: "",
      });
    }
  }
  render() {
    return (
      <form>
        <textarea
          className="textarea"
          placeholder="Type a message"
          cols="10"
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.message}
        />
      </form>
    );
  }
}

export default MessageBox;
