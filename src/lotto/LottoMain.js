import React from "react";
import Loading from "../Common/Loading";
import Axios from "axios";

const startDate = "2002-12-07";
const date = 7;
const day = 24;
const hour = 60;
const min = 60;
const second = 1000;
const week = date * day * hour * min * second;

class LottoMain extends React.Component {
  state = {
    isLoading: true,
    round: 1,
    games: [],
  };

  componentDidMount() {
    const { isLoading, round, games } = this.calculateDate();
    this.setState({
      isLoading: isLoading,
      round: round,
      games: games,
    });
  }

  async calculateDate() {
    let start = new Date(startDate);
    const end = new Date();
    let round = 1;
    let games = [];
    while (start.getTime() <= end.getTime()) {
      start = new Date(start.getTime() + week);

      const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round++}`;

      const game = await Axios({
        method: "GET",
        url: url,
        header: {},
      }).catch((error) => {
        throw ("error", error);
      });
      games.push(game);
    }

    return { isLoading: false, round: round, games: games };
  }

  render() {
    const { isLoading, round, games } = this.state;
    return <div>{isLoading ? <Loading /> : <h1>Lotto 할꺼야</h1>}</div>;
  }
}

export default LottoMain;
