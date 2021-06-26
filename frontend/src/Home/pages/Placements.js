import React from "react";
import Branchwise_placement_BarChart from "../components/Branchwise_placement_BarChart";
import Top_Five_Recruiter_PieChart from "../components/Top_Five_Recruiter_PieChart";
import Placement_BarChart from "../components/Placement_BarChart";
import Companies_Visited_BarChart from "../components/Companies_Visited_BarChart";
import Highest_Packege_LineChart from "../components/Highest_Packege_LineChart";
import Average_Package_LineChart from "../components/Average_Package_LineChart";
import { Container } from "@material-ui/core";

const Placements = () => {

  return (
    <Container>
      <div className="chart">
        <div className="firstRow">
          <Branchwise_placement_BarChart />
          <div className="Top_Five_Recruiter_PieChart">
            <Top_Five_Recruiter_PieChart />
          </div>
        </div>

        <div className="secoundRow">
          <Placement_BarChart />
          <Companies_Visited_BarChart />
        </div>
        <div className="thirdRow">
          <Highest_Packege_LineChart />
          <Average_Package_LineChart />
        </div>
      </div>
    </Container>
  );
};

export default Placements;
