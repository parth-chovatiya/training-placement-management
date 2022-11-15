import React from "react";

import classes from "./Mission_Vision_Msg.module.css";

const Mission_Vision_Msg = () => {
  return (
    <div className={classes.col}>
      <div className={`${classes.row} ${classes["row-1"]}`}>
        <div className={classes.collegename}>
          <h1>Veer Narmad South Gujarat University</h1>
        </div>
        <div className={classes.visionmission}>
          <div className={classes.vision}>
            <h2>VISION</h2>
            <p>
              "Produce globally employable innovative engineers with core
              values."
            </p>
          </div>
          <div className={classes.mission}>
            <h2>MISSION</h2>
            <p>
              Re-engineer curricula to meet global employment requirements.
              Promote innovative practices at all levels. Imbibe core values.
              Reform policies, systems and processes at all levels. Develop
              faculty and staff members to meet the challenges.
            </p>
          </div>
        </div>
      </div>

      <div className={`${classes.row} ${classes["row-2"]}`}>
        <div className={classes.principalmsg}>
          <h1>Principal's Message</h1>
        </div>
        <div className={classes.msg}>
          <p>
            Dear All, The need of the region comprising South Gujarat to have a
            separate university was voiced initially by educationists such as
            Atisukhshankar Trivedi who through public speeches and writings
            created awareness and gained support for this demand. This was
            immediately taken up and strongly supported by the Education
            societies of Surat and Navsari which already supported and managed
            colleges in various disciplines imparting both Undergraduate and
            Postgraduate education. Moreover, these were some of the most highly
            reputed academic centres under both the University of Bombay and the
            Gujarat University. The outcome of these moves was that at a meeting
            of educationists and eminent citizens organized under the auspices
            of the Sarvajanik Education Society in Surat on July 31, 1960 a
            committee of 38 members was appointed to draw up guidelines and
            principles for the establishment of a separate university for South
            Gujarat. This document was submitted to the Chief Minister and
            Education Minister of Gujarat. When Dr. C. D. Deshmukh, the then
            chairperson of the University Grants Commission, visited Surat in
            December 1960, the same document was submitted to him. In February
            1961 a submission entitled South Gujarat University : A Tentative
            Phased Programmed for its Establishment and Development was handed
            to the Education Minister. Further, at a meeting of this committee
            held in August 1962 a representational committee was appointed to
            explain the need, feasibility and urgency of the demand for a
            separate university for South Gujarat to the Education Minister.
            This committee popularly came to be known as the Lalbhai Committee
            after its Chairperson Shri L. R. Desai, Vice-Chancellor of Gujarat
            University who continued to chair first, the Evaluation Committee of
            1964 and later, the Advisory Committee appointed under Veer Narmad
            South Gujarat University Act, 1965.
          </p>
          <br />
          <p>Prof. Dhananjay Patel</p>
          <p>Principal</p>
        </div>
      </div>
    </div>
  );
};

export default Mission_Vision_Msg;
