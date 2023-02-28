import React from "react"
import "./Overlay.css"
import hero from "../../images/hero.png"

function Overlay(props) {
  const closeModal = () => {
    props.setShowModal(false)
  }

  return (
    <div className="overlay">
      <div className="overlay__content">
        <div className="overlay__content-image">
          <div className="overlay__content-close">
            <button className="close-btn" onClick={closeModal}>
              x
            </button>
          </div>
          <img src={hero} alt="hero" />
        </div>
        <div className="overlay__text">
          <div className="overlay__text-thank"> Thank You!</div>

          <h5>For joining our waitlist. Would you like us to</h5>
          <h5>send you regular updates on key features</h5>
          <h5>added?</h5>
          <div className="overlay__btns">
            <button className="left">Yes do</button>{" "}
            <button className="right">No don't</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay
