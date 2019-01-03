import React, { Component } from 'react';
import { Link }  from 'react-router-dom';


import Header from '../components/Header';
import blokimej from '../img/blockchainmenu.jpg';
import profPic from '../img/myprofile.jpg';
import kolegaPic from '../img/kolega1.jpg';
import tokoPic from '../img/toko1.jpg';
import toPic from '../img/topic.jpeg';
import LIicon from '../img/LIicon.png';
import symCam from '../img/sym_cam.png';
import symVid from '../img/sym_vid.png';
import './style/home.css';

class Home extends Component {
    render() {
        return (
        <div>
            <Header />
            <div className="container-fluid"  style={{paddingTop:"90px"}}>
                    <div className="row" style={{ backgroundColor:"rgba(0, 0, 0, .9)"}}>

                    {/* BAGIAN KIRI */}
                        <div className="col-md-3 col-lg-3" style={{backgroundColor:"whitesmoke"}}>
                      
                            <div className="card">
                                <div className="card-header" style={{backgroundColor:"white"}}>
                                    <div className="profWrapper">
                                        <img src={profPic} className="profile" alt=""/>
                                    </div>
                                    <center>
                                    <h6 className="card-title" style={{marginBottom:"0"}}> Raedi Nurdiansyah </h6>
                                    <small className="text-muted"> Tech enthusiast </small>
                                    </center>
                                </div>
                                <div className="card-body">
                                    <div className="lowerLeftHome">
                                        <p className="text-primary" style={{ marginBottom: "0", fontSize: "x-large" }}> 88 </p>
                                        <small className="text-muted"> Who's viewed your profile </small>
                                    </div>
                                <hr/>
                                    <div className="lowerLeftHome">
                                        <p className="text-primary" style={{marginBottom:"0",fontSize:"x-large"}}> 1,113 </p>
                                        <small className="text-muted"> Connections </small> <br/>
                                        <small style={{fontWeight:"bold"}}> Manage your Network </small>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted"> Access Exclusive Tools & Insights </small>
                                    <p> Free Upgrade Premium Account </p>
                                </div>
                            </div>
                        </div>

                        {/* BAGIAN TENGAH */}
                        <div className="col-md-5 col-lg-5" style={{ backgroundColor: "whitesmoke" }}>
                            <div className="card" style={{marginBottom:"15px"}}>   
                                <div className="card-body col-md-12 col-lg-12" style={{padding:"0"}}>
                                    <div className="row" style={{lineHeight:"72px"}}>
                                        <div className="post col-lg-8 col-md-8" >
                                            <span style={{padding: "20px"}}>Start a Post</span>
                                        </div>
                                        <div className="post2 col-lg-2 col-md-2">
                                            <img src={symCam} alt="" />
                                        </div>
                                        <div className="post2 col-lg-2 col-md-2">
                                            <img src={symVid} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p className="card-text"> <Link to="#"> Write an Article</Link> on LinkedIn  </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <div className="card">
                                        <img src={blokimej} className="card-img-top" alt="blockchain"/>
                                            <div className="card-body">
                                                <h5 className="card-title">Blockchain, Dari Teknologi Abstrak Hingga Jadi 'Otak' Bisnis</h5>
                                                <small className="text-muted">raedi.oktagon.co.id</small>
                                            </div>
                                    </div>
                                    <small className="text-muted"> 1 Like </small>
                                </div>
                                <div className="card-footer container">
                                    <ul className="pager">
                                        <li><Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;Like</Link></li>
                                        <li><Link to="#"><i className="fa fa-commenting-o" aria-hidden="true"/>&nbsp;Comment</Link></li>
                                        <li><Link to="#"><i className="fa fa-share" aria-hidden="true"/>&nbsp;Share</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BAGIAN KANAN */}
                        <div className="col-md-4 col-lg-4" style={{ backgroundColor: "whitesmoke" }}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text"> Add to your feed</p>
                                        <i className="fa fa-info-circle" aria-hidden="true" style={{textAlign:"right"}} />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <img src={kolegaPic} className="user" alt="" />
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <small><strong>Frank Dimitri</strong><img src={LIicon} alt="" /></small>
                                            <small className="text-muted"> Co-Founder & OB at Errand, Inc </small>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <button> + Follow </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <img src={tokoPic} className="user" alt="" />
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <small><strong> Shopee </strong></small>
                                            <small className="text-muted"> company <i className="fa fa-circle" aria-hidden="true"></i> internet </small>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <button> + Follow </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <img src={toPic} className="topic" alt=""/>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <small><strong> Software Engineering </strong></small>
                                            <small className="text-muted"> Topic </small>

                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                        <button> + Follow </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <small style={{fontWeight:"bold"}}> <Link to="#"> View all recommendations </Link> </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
             </div>



        </div>
        );
    }
}
export default Home