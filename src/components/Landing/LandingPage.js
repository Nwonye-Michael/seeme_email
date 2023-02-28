import React, { useState, useEffect } from "react"
import Hero from "../../images/hero.png"
import Header from "../Header/Header"
import Overlay from "../Overlay/Overlay"
import "./Landing.css"

function LandingPage() {
  const [phoneWidth, setPhoneWidth] = useState(false)
  const [pcWidth, setPcWidth] = useState(false)
  const [showModal, setShowModal] = useState()
  const { innerWidth: width } = window
  useEffect(() => {
    if (window.innerWidth <= 480) {
      setPhoneWidth(true)
      setPcWidth(false)
      console.log(window, width, "mobile")
    } else if (window.innerWidth > 480) {
      setPcWidth(true)
      setPhoneWidth(false)
      console.log(window, width, "pc")
    }
  }, [width])

  return (
    <div className="container">
      <div className="landingpage">
        <Header />
        <div className="content">
          <div className="content__text">
            <div className="content__title">
              <span>Keep track of your</span>
              <span className="time__span">
                <span> loved ones in real </span>
                <span>time!</span>
              </span>
            </div>
            {pcWidth && (
              <div className="content__desc">
                <span>We are building a one click tracking app for your</span>{" "}
                <span>friends and families.</span>
                <span></span>
              </div>
            )}{" "}
            {phoneWidth && (
              <div className="content__desc content__desc__mobile">
                <div>We are building a one click</div>
                <div>tracking app for your friends</div>
                <div>and families.</div>
              </div>
            )}
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
                setShowModal(true)
              }}
            >
              <input placeholder=" Your email address" type="text" />
              <button>Join waitlist</button>
            </form>
          </div>
          <div className="heroImg">
            <img src={Hero} alt="heroimg" />{" "}
          </div>
        </div>
      </div>
      {showModal && (
        <Overlay showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  )
}

export default LandingPage

