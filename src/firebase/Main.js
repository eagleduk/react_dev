import React from "react";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import Header from "./Header";
import firebase from "firebase";

class Main extends React.Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyCTlHblNJwxitEY9MaaYEp-R52flKTrAvM",
      authDomain: "react-firebase-component.firebaseapp.com",
      databaseURL: "https://react-firebase-component.firebaseio.com/",
      projectId: "react-firebase-component",
      storageBucket: "react-firebase-component.appsopt.com",
      messagingSenderId: "1078642203694",
    };

    try {
      firebase.initializeApp(config);
    } catch (err) {}
  }
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="coulmn is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
