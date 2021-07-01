import React from 'react'
import Infosys from '../image/infosys.png'
import Tech_Mahindra from "../image/Tech_Mahindra.png";
import atul from "../image/atul.jpg";
import tbea from "../image/tbea.png";
import essar from "../image/essar.png";
import havells from "../image/havells.png";
import adanigas from "../image/adanigas.png";
import rantech from "../image/rantech.png";
import ghcl from "../image/ghcl.png";
import vardhman from "../image/vardhman.png";

import './RecuiterSpeak.css'

const RecuiterSpeak = () => {
  return (
    <>
      <h1>Recruiters Speak</h1>
      <hr />
      <br />
      <div>

        <div className="row">
          <div className="header">
            <p>Infosys</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={Infosys} alt="Infosys" srcset="" />
            </div>
            <div className="details">
              <p><span>Harleen Sodhi</span> - Assistant Manager,HR</p>
              <p className="desc">Candidates possess good analytical skills and are technically sound. Students also gave an impression of being dynamic and sincere.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>Tech Mahindra</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={Tech_Mahindra} alt="Tech Mahindra" srcset="" />
            </div>
            <div className="details">
              <p><span>Mangesh Tapare</span> - Manager,HR</p>
              <p className="desc">College Infrastructure is really Good. Students may focus conducting more soft skill Programme.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>Atul Ltd.</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={atul} alt="Atul Ltd." srcset="" />
            </div>
            <div className="details">
              <p><span>Maitry Panchal</span> - Senior Executive,HR</p>
              <p className="desc">Great Hospitality provided.It was overall great efforts by the students in synchronising th process.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>TBEA Energy</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={tbea} alt="TBEA Energy" srcset="" />
            </div>
            <div className="details">
              <p><span>Kunal Kuma</span> - Senior Manager,HR</p>
              <p className="desc">It was a good experience. Overall Knowledge level of students was very good.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>Essar</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={essar} alt="Essar" srcset="" />
            </div>
            <div className="details">
              <p><span>Janmesh Pandya</span> - Human Resource Manager</p>
              <p className="desc">Wonderful experience in terms of practical exposure, soft skills, professional etiquettes and the overall Confidence.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>Havells India Ltd.</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={havells} alt="Havells India Ltd." srcset="" />
            </div>
            <div className="details">
              <p><span>Meenesh Chaudhary</span> - Manager,HR</p>
              <p className="desc">Overall Infrastructure & facility was excellent. Good Coordination during the whole process. Students were good.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>ADANI GAS</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={adanigas} alt="ADANI GAS" srcset="" />
            </div>
            <div className="details">
              <p><span>Anirban Kapat</span> - Head HR</p>
              <p className="desc">Pleased to have an opportunity towards positve building of young talents.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>Rang Technologies</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={rantech} alt="Rang Technologies" srcset="" />
            </div>
            <div className="details">
              <p><span>Ronak Patel</span> - Managing Director</p>
              <p className="desc">We had really good experience with GCET as per our requirment of communication & Flexibility.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>GHCL</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={ghcl} alt="GHCL" srcset="" />
            </div>
            <div className="details">
              <p><span>Siddhi Mehta</span> - Assistant Manager,HR</p>
              <p className="desc">Overall it was nice experience.Quality of students is considerable.Very nice support provided by GCET to take us our process smoothly.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="header">
            <p>Vardhman Acrylics</p>
          </div>
          <div className="body">
            <div className="image">
              <img src={vardhman} alt="Vardhman Acrylics" srcset="" />
            </div>
            <div className="details">
              <p><span>Deepak Shukla</span> - Human Resource Manager</p>
              <p className="desc">Co-operation recived was excellent & supportive with positive attitude of students.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default RecuiterSpeak
