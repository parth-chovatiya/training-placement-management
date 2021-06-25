import React from "react";
import Branchwise_placement_BarChart from "../components/Branchwise_placement_BarChart";
import Top_Five_Recruiter_PieChart from "../components/Top_Five_Recruiter_PieChart";
import Placement_BarChart from "../components/Placement_BarChart";
import Companies_Visited_BarChart from "../components/Companies_Visited_BarChart";
import Highest_Packege_LineChart from "../components/Highest_Packege_LineChart";
import Average_Package_LineChart from "../components/Average_Package_LineChart";

const Placements = () => {
  
  return (
    <div className="chart">
      <Branchwise_placement_BarChart />
      <Top_Five_Recruiter_PieChart />
      <Placement_BarChart />
      <Companies_Visited_BarChart />
      <Highest_Packege_LineChart />
      <Average_Package_LineChart />
    </div>
  );
};

export default Placements;
