import React from 'react'
import './topbody.css'
import UserGroup from '../../assets/userGroup.png'
import ActiveGroup from '../../assets/activeGroup.png'
import UserWithLoanGroup from '../../assets/userWithLoanGroup.png'
import UserWithSavingsGroup from '../../assets/userWithSavingsGroup.png'
import IconSort from '../../assets/sortGroup.png'
import Tablemenu from '../../assets/menuVector.png'
import BlacklistIcon from '../../assets/np_delete-friend.png'
import ActivateIcon from '../../assets/np_user.png'
import viewDetailIcon from '../../assets/eyes.png'


const Topbody = () => {
  return (
    <div className="topbody__container">
        <h2>Users</h2>
        <div className="topbody__container__inner">
            <div className="user__card">
                <div className="icon_holder flex-center">
                    <img src={UserGroup} className="icon__" alt="icon" />
                </div>
                <h3>Users</h3>
                <h1>2,453</h1>
            </div>
            <div className="user__card">
                <div className="icon_holder1 flex-center">
                    <img src={ActiveGroup} className="icon__" alt="icon" />
                </div>
                <h3>Active Users</h3>
                <h1>2,453</h1>
            </div>
            <div className="user__card">
                <div className="icon_holder2 flex-center">
                    <img src={UserWithLoanGroup} className="icon__" alt="icon" />
                </div>
                <h3>Users with loans</h3>
                <h1>12,453</h1>
            </div>
            <div className="user__card">
                <div className="icon_holder3 flex-center">
                    <img src={UserWithSavingsGroup} className="icon__" alt="icon" />
                </div>
                <h3>Users with savings</h3>
                <h1>109,453</h1>
            </div>
        </div>
        {/* Table */}
        <div className="table__container">
            <table className="table">
                <thead>
                    <tr className="table__tr">
                        <th>
                            <div className="flex">
                                <span>Organization</span>  
                                <span><img src={IconSort} alt="icon" className="sort_icon" /></span>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <span>Username</span>  
                                <span><img src={IconSort} alt="icon" className="sort_icon" /></span>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <span>Email</span>  
                                <span><img src={IconSort} alt="icon" className="sort_icon" /></span>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <span>Phone number</span>  
                                <span><img src={IconSort} alt="icon" className="sort_icon" /></span>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <span>Date joined</span>  
                                <span><img src={IconSort} alt="icon" className="sort_icon" /></span>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <span>Status</span>  
                                <span><img src={IconSort} alt="icon" className="sort_icon" /></span>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Ismail</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132812904</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__inactive">Inactive</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                        <div className="status__popover">
                            <div className="status__item flex">
                                <img src={viewDetailIcon} alt="icon" className="item__inner" />
                                <a href="www.lendersqr.com" className="item__inner_p">View Details</a>
                            </div>
                            <div className="status__item flex">
                                <img src={BlacklistIcon} alt="icon" className="item__inner" />
                                <a href="www.lendersqr.com" className="item__inner_p">Blacklist Users</a>
                            </div>
                            <div className="status__item flex">
                                <img src={ActivateIcon} alt="icon" className="item__inner" />
                               <a href="www.lendersqr.com" className="item__inner_p"> Activate Users</a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Musa</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132812904</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td> <div className="tab__blacklisted">Blaclisted</div></td>
                    <td >
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Ismail</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132812904</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__pending">Pending</div></td>
                    <td >
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132812904</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__pending">Pending</div></td>
                    <td >
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__pending">Pending</div></td>
                    <td >
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__pending">Pending</div></td>
                    <td >
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                <tr className="table__row">
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>Adedeji@lendsqr.com</td>
                    <td>08132432434</td>
                    <td>May, 30 2022 10:30 AM</td>
                    <td><div className="tab__active">Active</div></td>
                    <td>
                        <div className="r_pad"><img src={Tablemenu} alt="icon" className="sort_icon" /></div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        {/* Pagination */}
        <div className="pagination flex-sb">
            <div className="pagination__inner flex">
                <div className="pagination__content">Showing</div>
                <div className="pagination__content">
                    <div className="pagination__content_select">
                        <select name="" id="">
                            <option value="">100</option>
                            <option value="">50</option>
                            <option value="">10</option>
                        </select>
                    </div>
                </div>
                <div className="pagination__content"> out of 200</div>
            </div>
            <div className="pagination__inner flex">
                <div className="pagination__content">
                    <div className="pagination__content_select select__fw"></div>
                </div>
                <div className="pagination__content">1</div>
                <div className="pagination__content">2</div>
                <div className="pagination__content">3</div>
                <div className="pagination__content">4</div>
                <div className="pagination__content">...</div>
                <div className="pagination__content">15</div>
                <div className="pagination__content">16</div>
                <div className="pagination__content">
                    <div className="pagination__content_select select__bk"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbody