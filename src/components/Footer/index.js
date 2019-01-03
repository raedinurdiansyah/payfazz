import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import LILogoFooter from '../../img/LinkedIn-logo-bar.png';



class Footer extends Component {
    render() {

        return (

            <div className="container footerNav">
                <div className="logoFooter-wrapper">
                    <img src={LILogoFooter} className="logoFooter" alt="" />
                </div>

                <div className="container col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 list">
                            <div className="flex-container">
                                <div className="flex-item"> About </div>
                                <div className="flex-item"> Careers </div>
                                <div className="flex-item"> Advertesing </div>
                                <div className="flex-item"> Mobile </div>
                                <div className="flex-item"> Talent Solutions </div>
                                <div className="flex-item"> Marketing Solutions</div>
                                <div className="flex-item">Sales Solutions </div>
                                <div className="flex-item"> Small Business </div>
                                <div className="flex-item"> Community Guide </div>
                                <div className="flex-item">Privacy & Terms </div>
                                <div className="flex-item"> Send Feedback </div>
                                <div className="flex-item"> Safety Center </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1" />
                        <div className="col-lg-5 col-md-5 list">
                            <div className="row d-flex justify-content-between">
                                <div className="footer-menu">

                                    <div className="question">
                                        <div className="row">
                                            <div className="icon">
                                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                            </div>
                                            <div className="info flex-column">
                                                <p className="footerFont"> Questions?</p>
                                                <small className="text-muted"> Visit our Help Center </small>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="setting">
                                        <div className="row">
                                            <div className="icon">
                                                <i class="fa fa-cog" aria-hidden="true"></i>
                                            </div>
                                            <div className="info">
                                                <p className="footerFont"> Manage your account and privacy. </p>
                                                <small className="text-muted"> Go to your Settings. </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="language">
                                    <small className="text-muted"> Select Language</small>

                                    <div className="dropdown">
                                        <button className="btn btn-outline-primary dropdown-toggle bahasa" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                                        >
                                            English (English)
                                    <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link to="#"> href="#">Bahasa (Indonesia)</Link></li>
                                            <li><Link to="#"> href="#">Spanish (Spain)</Link></li>
                                            <li><Link to="#"> href="#">Italian (Italy)</Link></li>
                                            <li role="separator" className="divider"></li>
                                            <li><Link to="#"> href="#">Thantura (Thanos)</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;