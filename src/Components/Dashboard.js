import { useEffect, useState } from "react";
import Chart from "./Chart";
import "chart.js/auto";
import DataGridComponent from "./DataGridComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faSlideshare } from "@fortawesome/free-brands-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div class="col main pt-5 mt-3">
      <div class="boxes-container">
        <div class="box bg-success">
          <div class="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h6 class="text-uppercase">Users</h6>
          <h1 class="display-6">134</h1>
        </div>
        <div class="box bg-danger">
          <div class="icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h6 class="text-uppercase">Posts</h6>
          <h1 class="display-6">87</h1>
        </div>
        <div class="box bg-info">
          <div class="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <h6 class="text-uppercase">Tweets</h6>
          <h1 class="display-6">125</h1>
        </div>
        <div class="box bg-warning">
          <div class="icon">
            <FontAwesomeIcon icon={faSlideshare} />
          </div>
          <h6 class="text-uppercase">Shares</h6>
          <h1 class="display-6">36</h1>
        </div>
      </div>

      <hr />

      <DataGridComponent />
      
      <div className="chartContainer">
        <Chart />
      </div>
      
      <div className="performance">
      <h6>Performace Analysis</h6>
        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="70">
          <div class="progress-bar bg-success" style={{width: "35%",}}>Kurtis Weissnat</div>
        </div>
        <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="70">
          <div class="progress-bar bg-info" style={{width: "55%"}}>Chelsey Dietrich</div>
        </div>
        <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="70">
          <div class="progress-bar bg-warning" style={{width: "45%"}}>Ervin Howell</div>
        </div>
        <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="70">
          <div class="progress-bar bg-danger" style={{width: "75%"}}>Patrick Bateman </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
