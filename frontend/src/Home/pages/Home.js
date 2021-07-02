import React from 'react'
import Carousel from '../components/Carousel'
import Mission_Vision_Msg from '../components/Mission_Vision_Msg'
import Container from '@material-ui/core/Container';
import CampusMoment from './CampusMoment';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Container maxWidth="lg">
        <Mission_Vision_Msg />
        <CampusMoment />
      </Container>
    </div>
  )
}

export default Home
