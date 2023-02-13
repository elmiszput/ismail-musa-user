import React from 'react'
import './colimage.css'
import GroupLogo from '../../assets/GroupLogo.png'
import PabloSignIn from '../../assets/pablo-sign-in 3.png'

const ColImage = () => {
  return (
    <div className="container ">
        <div className="container-inner">
          <div className="con-col  flex-center">
            <div className="con-img">
              <div className="img-holder">
                <div className="logo">
                  <img src={GroupLogo} alt="" />
                </div>
              </div>
              <div className="illus-holder">
                <div className="illustration">
                  <img src={PabloSignIn} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="con-col2 flex-center">
            <div className="con-form">
              <div className="header__title">
                <h1>Welcome</h1>
                <p>Enter details to login</p>
              </div>
              <form action="/dashboard" className="login_form">
                
                <input type="text" name="email" className="control" placeholder='Email'/>
                <div className="pass__wrap">
                <input type="password" name="password" className="control" placeholder='Password'/>
                <p>Show</p>
                </div>
                <a href="ttt.com" className="forgot__p">Forgot password?</a>
                <button className="btn btn-enter">Log in</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ColImage