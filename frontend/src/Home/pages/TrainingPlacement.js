import React from "react";
import Branchwise_placement_BarChart from "../components/Branchwise_placement_BarChart";
import Top_Five_Recruiter_PieChart from "../components/Top_Five_Recruiter_PieChart";
import Placement_BarChart from "../components/Placement_BarChart";
import Companies_Visited_BarChart from "../components/Companies_Visited_BarChart";
import Highest_Packege_LineChart from "../components/Highest_Packege_LineChart";
import Average_Package_LineChart from "../components/Average_Package_LineChart";

const TrainingPlaccement = () => {
  return (
    <>
      <h2>Training and Placement Cell</h2>
      <hr />
      <br />  
      BVM, a premier engineering college, is considered to be top 1% among all engineering colleges in Gujarat. Since inception, BVM has a record of best Placement all over Gujarat. Around 35+companies, including MNCs like Infosys, Essar, TCS, L&T, ABB, Torrent Power, Seimens, etc.. visit BVM every year for placement.
      <br /> <br /> <br />
      Mr. Mehul Patel    [I/C Training And Placement]
      <br /> <br /> <br />
      Dr. Mehul Shah    [Assistant Training And Placement]
      <br /> <br /> <br />
      Contact:+91 9978997088/ +91 9909529395
      <br /> <br /> <br />
      
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
    </>
  );
};

export default TrainingPlaccement;
