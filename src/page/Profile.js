import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style/profile.css';
import defUserPic from '../img/default-user.png';
import kolegaPic from '../img/kolega1.jpg';
import contactInfo from '../img/contact-address.png';
import connectionIcon from '../img/connection.png';
import uniLogo from '../img/UP-uniIMG.png';
import companyLogo from '../img/UP-companyIMG.jpg';
import companyVector from '../img/company-vector.jpg';

class Profile extends Component {
    render() {
        return (
            <div>
                < Header />

                <div className="container-fluid" style={{ paddingTop: "90px", paddingLeft: "32px", paddingRight: "32px" }}>
                    <div className="row">

    {/* BAGIAN KIRI */}
                        <div className="col-lg-9 col-md-9" style={{ backgroundColor:"yellow"}}>
                        <section id="userProfile">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <img alt="" src={kolegaPic} className="foto-mainProfile" />
                                    </div>
                                    <div className="container-fluid profileSection">
                                        <div className="row">

                                            <div className="col-lg-8 col-md-8 profileInfo">
                                                <div className="nama">
                                                    <h3> Frank Dimitri </h3><i class="fa fa-circle" aria-hidden="true"></i><h4>2nd</h4>

                                                </div>
                                                <div className="position">
                                                    <h5> Co-Founder & OB at Errand, Inc</h5>
                                                </div>
                                                <div className="location">
                                                    <p>Bandung Area, West Java, Indonesia</p>
                                                </div>
                                                <div className="prof-button">
                                                    <button className="btn-primary">
                                                        Connect
                                                    </button>
                                                    <button type="button" class="btn btn-outline-primary">Message</button>
                                                    <button type="button" class="btn btn-outline-secondary">More...</button>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 profileLinks">
                                                   <div className="col-lg-12">

                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <img alt="" src={companyLogo} className="linksLogo"/>
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <p> Errand, Inc </p>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <img alt="" src={uniLogo} className="linksLogo" />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <p> University of Bina Nusantara (BINUS) </p>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <img alt="" src={contactInfo} />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <p> See contact info </p>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <img alt="" src={connectionIcon}  />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <p> 500 + connection </p>
                                                            </div>
                                                        </div>

                                                   </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <p>Disruption Disciples Worldwide. Experienced Founder, Entrepreneur, and Executive who brings decades of experience and leadership to each project he joins. Currently, working on Emerging & Future Technology, Blockchain Infrastructure, ICO's, STO's, Consulting, Advising, Business Development, and Cryptocurrency OTC Transactions.</p>
                                    </div>
                                </div>
                                <div className="card-footer" style={{ backgroundColor: "white" }}>
                                        <div id="accordionUP" >

                                            
                                                    <a class="card-link" data-toggle="collapse" href="#collapseUP">
                                                        <center>Show more <i class="fa fa-angle-down" aria-hidden="true"></i></center>
                                                    </a>
                                                </div>
                                                <div id="collapseUP" className="collapse show" data-parent="#accordionUP">
                                                    <div class="card-body">
                                                        Lorem ipsum..
                                                    </div>
                                               
                                        </div>
                                </div>
                            </div>
                        </section>
                            <div className="card highlights" style={{marginTop:"15px"}}>
                                <div className="card-body">
                                    <div className="col-lg-12 col-md-12 highlights">
                                        <h3> Highlights </h3>
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 L-highlights">
                                                <h4> 85 Mutual Connections </h4>
                                                <p> You and Frank both know Badru Setyo, Achmad Zacky, and 83 others </p>
                                            </div>
                                            <div className="col-lg-6 col-md-6 R-highlights">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-2">
                                                        <i class="fa fa-comments-o" aria-hidden="true" style={{fontSize:"48px"}}></i>
                                                    </div>
                                                    <div className="col-lg-10 col-md-10">
                                                        <h4> Reach out to Frank for... </h4>
                                                        <p> Joining a nonprofit </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer" style={{ backgroundColor: "white" }}>
                                    <div id="accordion">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                            <center>Show more <i class="fa fa-angle-down" aria-hidden="true"></i></center>
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                        <div class="card-body">
                                            Lorem ipsum..
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card activity" style={{ marginTop: "15px" }}>
                                <div className="card-body">
                                    <div className="col-lg-12 col-md-12 activity">
                                        <div className="title">
                                            <h3> Frank's Activity </h3>
                                        </div>
                                        <div className="button-follow">
                                            <button> Follow </button>
                                        </div>
                                        <div> 1,151 followers </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 content">
                                        <div className="row">
                                            <div className="col-lg-1 col-md-1 L-content">
                                                <img alt="" src={kolegaPic} className="user-2" />
                                            </div>
                                            <div className="col-lg-11 col-md-11 R-content">
                                                <p> Orchestrating a strategic engagement model to developers, scaling through influencers, offline events, online campaigns, third parties, social network, and technical communities in South East Asia (Singapore, Malaysia, and Indonesia). </p>
                                            </div>
                                        </div>
                                        <div>
                                            <text><Link to="#">See all activity</Link></text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <section id="backgrounds">
                            <div className="card" style={{ marginTop: "15px" }}>
                                <div className="card-body">
                                        <div className="title col-lg-12 col-md-12">
                                            <h3> Experience </h3>
                                        </div>
                                        <div className="col-lg-12 col-md-12 content">
                                            <div className="row">
                                                <div className="col-lg-1 col-md-1 L-content">
                                                    <img alt="" src={companyVector} className="user-2" />
                                                </div>
                                                <div className="col-lg-10 col-md-10 R-content">
                                                    <h5> Lab Coordinator</h5>
                                                    <h6> Binus International University </h6>
                                                    <p> Sep 2015 - Present</p>
                                                    <p> FX Mall </p>
                                                    <p> Trying to do something at Lab so people knows that I have a fixed job </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="accordionE">
                                            <a class="card-link" data-toggle="collapse" href="#collapse3">
                                                Show more <i class="fa fa-angle-down" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div id="collapse3" className="collapse show" data-parent="#accordionE">
                                            <div class="card-body">
                                                Lorem ipsum..
                                        </div>
                                        </div>

                                </div>
                           
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="title col-lg-12 col-md-12">
                                        <h3> Education </h3>
                                    </div>
                                </div>
                         
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="title col-lg-12 col-md-12">
                                        <h3> Volunteer Experience </h3>
                                    </div>
                                </div>
                     
                            </div>

                            <div className="card" style={{marginTop:"15px"}}>
                                <div className="card-body">
                                    <div className="title col-lg-12 col-md-12">
                                        <h3> Accomplishments </h3>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section id="interest">
                            <div className="card" style={{ marginTop: "15px" }}>
                                <div className="card-body">
                                    <div className="title col-lg-12 col-md-12">
                                        <h3> Interest </h3>
                                    </div>
                                </div>
                
                            </div>
                        </section>



                        </div>

    {/* BAGIAN KANAN */}
                        <div className="col-lg-3 col-md-3" style={{ backgroundColor:"whitesmoke"}}>
                            <p style={{fontSize:"1.4rem", fontWeight:"400"}}> People Also Viewed </p>

                            <div className="col-lg-2 col-md-2 foto">
                                <img alt="" src={defUserPic} className="user" />
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="nama">
                                    <p className="t-nama"> Abigail Manalulu </p>
                                </div>
                                <div className="col-lg-12 col-md-12 posisi">
                                    <p className="t-13"> Software Development Manager </p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 foto">
                                <img alt="" src={defUserPic} className="user" />
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="nama">
                                    <p className="t-nama"> Kifurai Chan </p>
                                </div>
                                <div className="col-lg-12 col-md-12 posisi">
                                    <p className="t-13"> Computer Science Lecturer at Bina Nusantara University </p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 foto">
                                <img alt="" src={defUserPic} className="user"/>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="nama">
                                    <p className="t-nama"> Shevchenko Tanjaya </p>
                                </div>
                                <div className="col-lg-12 col-md-12 posisi">
                                    <p className="t-13"> Technology Specialist and Co-Founder of PT. JAKALL DIGITAL NUSANTARA</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 foto">
                                <img alt="" src={defUserPic} className="user"/>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <div className="nama">
                                    <p className="t-nama"> Bobi Situmorang </p>
                                </div>
                                <div className="col-lg-12 col-md-12 posisi">
                                    <p className="t-13"> Head of Computer Science Program at Bina Nusantara University </p>
                                </div>
                            </div>
                        </div>

        {/* END BAGIAN KANAN */}
                    </div>
                    < Footer />
                </div>
            </div>
        )
    }
}

export default Profile;