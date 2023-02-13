import React from 'react'
import './dashboard.css'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Topbody from '../topbody/Topbody'

// const USER = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

const Dashboard = () => {

//   const searchUsers = async (userName) =>{
//     const response = await fetch(`${USER}=${userName}`);
//     const data = await response.json();

//     console.log(data);
//   }
//   useEffect(() => {
//     searchUsers('Jaycee15');
//   }, []);

  
  return (
    <div className="dashboard__container">
      <Header/>
      <div className="container__">
      <Sidebar/>
      <Topbody/>
      </div>
    </div>
  )
}

export default Dashboard