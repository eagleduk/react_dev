import React from "react";
import Axios from "axios";
import CovidRow from "./CovidRow";
import Loading from "../Common/Loading";
import "./Covid.css";

class CovidList extends React.Component {
  state = {
    isLoading: true,
    countries: [],
  };

  constructor(props) {
    super(props);
    this.state["appKey"] = props.appKey;
  }

  componentDidMount() {
    this.GetCovidStatistics();
  }

  async GetCovidStatistics() {
    const { appKey } = this.state;
    //const url = `https://covid-193.p.rapidapi.com/statistics?x-rapidapi-host=covid-193.p.rapidapi.com&x-rapidapi-key=${appKey}`
    //Axios.get(url);
    const {
      data: { response },
    } = await Axios({
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": appKey,
      },
    }).catch((error) => {
      console.log(error);
    });

    this.setState({
      isLoading: false,
      countries: response,
    });
  }

  render() {
    const { isLoading, countries } = this.state;
    return (
      <div>
        <div className={"contanier"}>
          <h1 className={`textTitleStyle`}>Country</h1>
          <h2 className={`textNormalStyle`}>Today</h2>
          <h3 className={`textNormalStyle`}>Today New</h3>
          <h2 className={`textNormalStyle`}>Death</h2>
          <h3 className={`textNormalStyle`}>Death new</h3>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          countries.map((value, index) => {
            return <CovidRow key={index} value={value} />;
          })
        )}
      </div>
    );
  }
}

export default CovidList;
