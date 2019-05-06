import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Introduce extends Component{
    render(){
        return(
            <section className ="intro"> 
                <div className="tagline px-3 py-4">
                    <h2 className="text-center text-white my-1">Oxyengine code</h2>
                </div>
                <div className="intro-area-container pt-5">
                    <div className="container">
                        <div className="intro-area">
                            <div className="title mb-5">
                                <h2 className="text-center text-white">What we do</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-3 col-xs-6">
                                    <div className="intro-area-item mb-5">
                                        <h3 className="text-white skills mb-4">Design</h3>
                                        <ul className="nav skills navbar-nav">
                                            <li><Link to="#">- UI & UX</Link></li>
                                            <li><Link to="#">- Adobe packages</Link></li>
                                            <li><Link to="#">- Sketch</Link></li>
                                            <li><Link to="#">- Logo</Link></li>
                                            <li><Link to="#">- Full webpage</Link></li>
                                            <li><Link to="#">- Full app</Link></li>
                                            <li><Link to="#">- Splash screens</Link></li>
                                            <li><Link to="#">- 2d models</Link></li>
                                            <li><Link to="#">- 3d models</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-xs-6">
                                    <div className="intro-area-item mb-5">
                                        <h3 className="text-white skills mb-4">Frontend</h3>
                                        <ul className="nav skills navbar-nav">
                                            <li><Link to="#">- Angular</Link></li>
                                            <li><Link to="#">- React</Link></li>
                                            <li><Link to="#">- Swift</Link></li>
                                            <li><Link to="#">- Java</Link></li>
                                            <li><Link to="#">- Kotlin</Link></li>
                                            <li><Link to="#">- Html & Css</Link></li>
                                            <li><Link to="#">- Bootstrap</Link></li>
                                            <li><Link to="#">- JS</Link></li>
                                            <li><Link to="#">- VueJs</Link></li>
                                            <li><Link to="#">- PHP</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-xs-6">
                                    <div className="intro-area-item mb-5">
                                        <h3 className="text-white mb-4 skills">Backend</h3>
                                        <ul className="nav skills navbar-nav">
                                            <li><Link to="#">- Python</Link></li>
                                            <li><Link to="#">- React</Link></li>
                                            <li><Link to="#">- Ruby on rails</Link></li>
                                            <li><Link to="#">- .Net</Link></li>
                                            <li><Link to="#">- Java</Link></li>
                                            <li><Link to="#">- Django</Link></li>
                                            <li><Link to="#">- Golang</Link></li>
                                            <li><Link to="#">- Nodejs</Link></li>
                                            <li><Link to="#">- Firebase</Link></li>
                                            <li><Link to="#">- AWS</Link></li>
                                            <li><Link to="#">- PHP</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-xs-6">
                                    <div className="intro-area-item mb-5">
                                        <h3 className="text-white skills mb-4">Marketing</h3>
                                        <ul className="nav skills navbar-nav">
                                            <li><Link to="#">- Adobe packages</Link></li>
                                            <li><Link to="#">- SEO</Link></li>
                                            <li><Link to="#">- Google Analythics</Link></li>
                                            <li><Link to="#">- Social ads</Link></li>
                                            <li><Link to="#">- Commerical Videos</Link></li>
                                            <li><Link to="#">- Intro vidoes</Link></li>
                                            <li><Link to="#">- Marketing banner</Link></li>
                                            <li><Link to="#">- Splash images/ videos</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Introduce