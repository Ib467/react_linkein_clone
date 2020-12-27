import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            {/* <h1> This is the header!</h1> */}
            
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon}  title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Business"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQGX4rxarerjhg/profile-displayphoto-shrink_200_200/0/1517474499694?e=1614211200&v=beta&t=cdu0WN49OXt2sOPC5mSnFNOFwHX4MIxOdjwLnfq163k" title="me" />

            </div>

        </div>
    ) 
}

export default Header
