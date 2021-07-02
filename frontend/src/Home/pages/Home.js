import React from 'react'
import Carousel from '../components/Carousel'
import Mission_Vision_Msg from '../components/Mission_Vision_Msg'
import Container from '@material-ui/core/Container';
import CampusMoment from '../components/CampusMoment';
import BvmInfo from '../components/BvmInfo';
import RecruitersField from '../components/RecruitersField';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Container maxWidth="lg">
        <BvmInfo />
        <Mission_Vision_Msg />
        <RecruitersField />
        <CampusMoment />
      </Container>
    </div>
  )
}

export default Home
