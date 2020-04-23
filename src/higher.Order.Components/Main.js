import React from "react";
import Hoc from "./HOC";
import StockList from "./StockList";
import UserList from "./UserList";

const StocksData = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Infosys",
  },
  {
    id: 3,
    name: "Reliance",
  },
];
const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UserList, UsersData);

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Users />
        </div>
        <div>
          <Stocks />
        </div>
      </div>
    );
  }
}

export default Main;
