import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './header.css';
import logo from '../../img/LIlogo.png';
import searchIcon from '../../img/SearchIcon.png';
import homeIcon from '../../img/HomeIcon.png';
import jobsIcon from '../../img/JobsIcon.png';
import menu from '../../img/Menu.png';
import messageIcon from '../../img/MessageIcon.png';
import networkIcon from '../../img/NetworkIcon.png';
import notifIcon from '../../img/NotifIcon.png';
import profPic from '../../img/myprofile.jpg';


class Header extends Component {
    render() {
        const avatar = "https://www.kwrwater.nl/wp-content/themes/kwr/assets/placeholders/no-profile-user.png"
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <Link to="#" className="navbar-brand" href="#"><img className ="logo" src={logo} alt="payfazzkeren" /> </Link>

                            <div className="inner-addon left-addon dropdown">
                                <i className="Schicon"><img src={searchIcon} className="nav-icon"  alt="" /></i>
                                <input style={{ height: "34px", width: "280px" }} type="text" className="form-control mr-sm-2 dropdown-toggle" data-toggle="dropdown" placeholder="Search" />
                                <div className="dropdown-menu">
                                    <p className="font-weight-bold">Search For</p>
                                    <ul className="margin-top">
                                        <li><Link to="#"><i className="fa fa-group icon-search" aria-hidden="true" />&emsp;People</Link></li>
                                        <li><Link to="#"><i className="fa fa-briefcase icon-search" aria-hidden="true"/>&emsp;Jobs</Link></li>
                                        <li><Link to="#"><i className="fa fa-list-alt icon-search" aria-hidden="true"/>&emsp;Posts</Link></li>
                                    </ul>
                                    <hr/>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="font-weight-bold">Recent</p>
                                        <p className="font-weight-bold">Clear</p>
                                    </div>
                                    
                                    <ul className="margin-top">
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Hantze Sudarma</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Ahmad Zikri</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Andoko Chandra</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Richard Fang</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Siska Felicia</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Saras Meini</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Andrew Mawikere</Link></li>
                                        <li><Link to="#"><img className="avatar" alt="" src={avatar} />&emsp;Alvin Asyari</Link></li>


                                    </ul>
                                </div>
                            </div> 

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <img src={homeIcon} className="nav-icon"  alt=""/>
                                    <Link to="#" className="nav-link" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                     <img src={networkIcon} className="nav-icon"  alt=""/>
                                     <span className="badge">1</span>
                                    <Link to="#" className="nav-link" href="#">My Network</Link>
                                </li>
                                <li className="nav-item">
                                    <img src={jobsIcon} className="nav-icon"  alt=""/>
                                    <Link to="#" className="nav-link" href="#">Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <img src={messageIcon} className="nav-icon"  alt="" />
                                    <Link to="#" className="nav-link" href="#">Messaging</Link>
                                </li> 
                                <li className="nav-item">
                                    <img src={notifIcon} className="nav-icon"  alt="" />
                                    <span className="badge">5</span>
                                    <Link to="#" className="nav-link" href="#">Notification</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <img src={profPic} id="profile" alt=""/>
                                    <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">Me
                                    <span class="caret"></span></Link>
                                    <ul class="dropdown-profile dropdown-menu">
                                    <li>Go to Profile</li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown" style={{borderLeft:"0.5px solid #5c6f7c"}}>
                                    <img src={menu} className="nav-icon"  alt="" />
                                    <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">Works
                                    <span class="caret"></span></Link>
                                </li>

                                <li className="nav-item">
                           
                                    <Link to="#" className="nav-link" href="#" style={{color: "#dccea4"}}>Free Upgrade to Premium</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header