import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Footer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
             
        }
     }
    
    render() {
        return(
            <footer>
                <div className="container">
                    <div className="footer-area pt-5"> 
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-xl-3">
                                <div className="footer-item mb-5">
                                    <figure className="figure">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="" width="280" height="280"/>
                                    </figure>
                                    <div className="text mb-5">
                                        <h3>OnyxEngines</h3>
                                        <p className="text-white">Dont break your dream, compile them</p>
                                    </div>
                                    
                                    <div className="clearfix"></div>

                                    <div className="about-info mb-5">
                                        <h3 className="text-left">About us</h3>
                                        <p className="text-white">Develope the way you want</p>
                                    </div>
                                    <div className="contact-info">
                                        <h3 className="text-left">Contact</h3>
                                        <a className="text-white envelope" href="mailto:support@onyxengines.com">support@onyxengines.com</a>
                                        <Link className="text-white tel" to="tel:">0000-000-00-000</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-3">
                                <div className="footer-item mb-5">
                                    <h3 className="mb-3">Information</h3>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Hire us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-3">
                                <div className="footer-item mb-5">
                                    <h3 className="mb-3">Helpful links</h3>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">FAQ</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Privacy Policy</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Terms & Condition</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-3">
                                <div className="footer-item mb-5">
                                    <h3 className="text-white mb-3">Dont miss out subcribe us</h3>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control email" type="email" placeholder="Email" />
                                        </div>
                                        <button className="btn btn-light subcribe-btn">Subcribe</button>	
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="copyright-container pt-2 pb-1">
                    <div className="copyright">
                        <p className="text-center text-white mt-2">Copyright 2019 onyxengines</p>
                        <ul className="social">
                            <li className="fb"><Link to="#"></Link></li>
                            <li className="in"><Link to="#"></Link></li>
                            <li className="inst"><Link to="#"></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer