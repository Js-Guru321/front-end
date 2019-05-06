import React, {Component} from 'react'
 
class Header extends Component {
    
    // constructor(props) {
    //     this.state = {
            
    //     }
    // }
    
    render() {
        return(
           
            <section className="banner" id="home"> 
                <figure className="banner-img">
                    <img className="" src={process.env.PUBLIC_URL + "assets/images/banner.jpg"}  alt="Banner" width="100%" height="861" />
                 </figure>
                <div className="banner-area">
                    <div className="banner-area-container">
                        <div className="banner-content">
                            <div className="container">
                                <div className="banner-main-content">
                                    <figure className="figure mb-4">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="Banner Logo" width="280" height="280"/>
                                    </figure>
                                    <h1 className="text-center text-white">Brings life together, Form your visions and creations.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header