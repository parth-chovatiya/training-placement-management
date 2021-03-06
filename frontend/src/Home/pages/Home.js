import React from "react";
import RecruitersField from "../components/RecruitersField";
import Carousel from "../components/Carousel";
import MissionVisionMsg from "../components/Mission_Vision_Msg";
import Container from "@material-ui/core/Container";
import CampusMoment from "../components/CampusMoment";
import BvmInfo from "../components/BvmInfo";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Container maxWidth="lg">
        <BvmInfo />
        <MissionVisionMsg />
        <RecruitersField />
        <CampusMoment />
      </Container>
    </div>
  );
};

export default Home;
