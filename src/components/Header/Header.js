import React from "react"
import logo from "../../images/logo.png"
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

export default Header
