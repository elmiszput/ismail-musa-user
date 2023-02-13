import React from 'react'
import './usertable.css'

const Usertable = () => {
  return (
    <div className="table__container">
        <table className="table">
          <thead>
            <tr className="table__tr">
                <th>Organization</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Date joined</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__row">
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>Adedeji@lendsqr.com</td>
                <td>08132432434</td>
                <td>May, 30 2022 10:30 AM</td>
                <td>Inactive</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Usertable