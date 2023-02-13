import React from 'react'
import './sidebar.css'
import Briefcase from '../../assets/briefcase.png'
import Homeicon from '../../assets/home.png'
import Users_fr from '../../assets/user-friends.png'
import Usersguaran from '../../assets/usersguaran.png'
import Sack from '../../assets/sack.png'
import HandshakeIcon from '../../assets/handshake-regular.png'
import Loan_reqIcon from '../../assets/sack 1.png'
import WhitelistIcon from '../../assets/whiteListuser-check1.png'
import karmIcon from '../../assets/karmauser-times1.png'
import SavinsPIcon from '../../assets/spGroup.png'
import FeesNcharIcon from '../../assets/coins-solid 1.png'
import TransaIcon from '../../assets/transactionicon.png'
import ServiceIcon from '../../assets/galaxy 1.png'

const Sidebar = () => {
  return (
    <div className="sidebar__container">
        <a href="www.lendersqr.com" className="list__con mb__list">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Switch Organization</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con  mb__list">
            <span className="list__icon">
              <img src={Homeicon} alt="" />
            </span>
            <h3>Dashboard</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con">
            <h3 className="list_sub_head">Customers</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg active">
            <span className="list__icon">
              <img src={Users_fr} alt="" />
            </span>
            <h3>Users</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Usersguaran} alt="" />
            </span>
            <h3>Guarantors</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Sack} alt="" />
            </span>
            <h3>Loans</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={HandshakeIcon} alt="" />
            </span>
            <h3>Decision Model</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Loan_reqIcon} alt="" />
            </span>
            <h3>Loan Request</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={WhitelistIcon} alt="" />
            </span>
            <h3>Whitelist</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={karmIcon} alt="" />
            </span>
            <h3>Karma</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con">
            <h3 className="list_sub_head">BUSINESSES</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Organization</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Sack} alt="" />
            </span>
            <h3>Loan Products</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={SavinsPIcon} alt="" />
            </span>
            <h3>Savings Products</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={FeesNcharIcon} alt="" />
            </span>
            <h3>Fees and Charges</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={TransaIcon} alt="" />
            </span>
            <h3>Transactions</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={ServiceIcon} alt="" />
            </span>
            <h3>Services</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Service Account</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Settlements</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Report</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con">
            <h3 className="list_sub_head">SETTINGS</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Preferences</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Fees and Prices</h3>
        </a>
        <a href="www.lendersqr.com" className="list__con mb__lg">
            <span className="list__icon">
              <img src={Briefcase} alt="" />
            </span>
            <h3>Audit Logs</h3>
        </a>
    </div>
  )
}

export default Sidebar