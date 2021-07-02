import React from 'react'
import "./Footer.css";


const Footer1 = () => {
  const items = []
  for(var i=0; i<128; i++){
    items.push(<div className="bubble" style={{'--size':`${2 + Math.random() * 4}rem`, distance:`${6 + Math.random() * 4}rem`, '--position':`${-5 + Math.random() * 110}%`, '--time':`${2 + Math.random() * 2}s`, '--delay':`${-1 * (2 + Math.random() * 2)}s`}}></div>)
  }

  return (
    <>
      <div className="footer">
        <div className="bubbles">
          {
            items
          }
        </div>
        <div className="content">
          <div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
            </div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
            </div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
            </div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
              <a href="#">Secuce</a>
            </div>
          </div>
        </div>
      </div>
      <svg style={{position: 'fixed', top: '100vh'}}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default Footer1
