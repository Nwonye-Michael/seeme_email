import React, { useState, useEffect } from "react"
import Hero from "../../images/hero.png"
import Header from "../Header/Header"
import Overlay from "../Overlay/Overlay"
import "./Landing.css"

function LandingPage() {
  const [showModal, setShowModal] = useState()
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
                <span>time!</span>{" "}
              </span>
            </div>
            <div className="content__desc">
              <span>
                We are building a one click <>tracking app for your</>
              </span>
              <span>
                <>friends </>and families.
              </span>
            </div>

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
