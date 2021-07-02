import React from 'react'

import classes from './Mission_Vision_Msg.module.css'

const Mission_Vision_Msg = () => {
  return (
    <div className={classes.col}>
      <div className={`${classes.row} ${classes['row-1']}`}>
        <div className={classes.collegename}>
          <h1>Birla Vishvakarma Mahavidyalaya</h1>
        </div>
        <div className={classes.visionmission}>
          <div className={classes.vision}>
            <h2>VISION</h2>
            <p>"Produce globally employable innovative engineers with core values."</p>
          </div>
          <div className={classes.mission}>
            <h2>MISSION</h2>
            <p>Re-engineer curricula to meet global employment requirements. Promote innovative practices at all levels. Imbibe core values. Reform policies, systems and processes at all levels. Develop faculty and staff members to meet the challenges.</p>
          </div>
        </div>
      </div>

      <div className={`${classes.row} ${classes['row-2']}`}>
        <div className={classes.principalmsg}>
          <h1>Principal's Message</h1>
        </div>
        <div className={classes.msg}>
          <p>Dear All,
              Birla Vishvakarma Mahavidyalaya Engineering College (BVM), an institution of Charutar Vidya Mandal, is the first engineering college of state(Since 1948) as well as first autonomous college of state(since 2015) established in 1948 by inspiration and motivation of Iron man of India Shri Sardar Patel and generous contribution from Shri Ghanshyamdasji Birla which is committed to emerge and disseminate word class unique learning experience through research based education and innovation across sphere. This premier technical institution has nurtured 20,000+ engineers and continuously evolved with the facilities like best infrastructure, state of art Laboratories upgraded with instruments and utility software packages, enriched library, central computing and net station, canteen, play field, gymnasium, medical facilities, hostel and residence quarters. Institute is awarded prestigious World Bank Assistance Project TEQIP-, II, III, state government projects like SSIP and many more appreciation award from Gujarat government and national technical bodies like AICTE, GTU for its remarkable contribution in the field of technical education. Majority programs of BVM are awarded Accreditation by NBA- AICTE. I am proud to say BVM is awarded with Best overall performing Engineering College 2018-19 and among top 300 by NIRF 2020. Meritorious students of Gujarat (Upto rank 2000) take the admission in BVM. It is one of the leading institutions across Gujarat which is renowned for its excellent placement record. 100+corporates visit the college for conducting Campus Interviews and more than 90% eligible students are placed through campus drive every year. Institute gain in top three positions almost in all branches at university results as well as co-curricular and extracurricular activities like technical events Ideathon/Hackathon/Project competitions, youth festivals, sport competitions at state, national and international level. BVM has made its mark nationally and internationally by developing learners with passion and commitment to work in a global environment, capable of creativity, innovation, and entrepreneurship for nation building through state-of-the-art teaching, learning and mentoring experience. We, at BVM are providing ample opportunities for the exposure to and interactions with international experts and global leaders in a variety of curricular, co- and extra- curricular activities for enrichment of learning experience. Institute is offering course curriculum with industry orientation and unique specialisations. we have credit transfer arrangements with foreign universities and one semester abroad arrangements through MOU with foreign universities. Institute is having doctorate and experienced faculties with extensive academic research experience and innovative methodologies of knowledge dissemination. Faculties of various department is contributing through R& D projects under different state level and international level funding Agencies.Faculties are also providing traditional consultancy in various sectors and firms. To make our engineers “INDUSTRY READY” according to the benchmark of Industry 4.0, Institute has established Industry institute interaction programme under which 200 faculty - 200 industries are collaborated to provide the industrial platform to the students and faculties. Number of MOUs are done between top industries at National/International level through which industry experts are giving their guidance and expertise for events like Project expo, expert talks, seminars, workshops, industry tour etc. These programs have helped to achieve Academia- industry collaboration and Partnership for Innovation. As a principal of BVM, I ensure that BVM is committed to work on the mission to produce globally employable innovative engineers with core values and to cultivate a field in which new ideas and research leading to emergence of creators, innovators, leaders, and entrepreneurs. My Best Wishes to all of you!!!!!
          </p>
          <br />
          <p>
            Prof. (Dr.) Indrajit Patel
          </p>
          <p>
            Principal
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission_Vision_Msg
