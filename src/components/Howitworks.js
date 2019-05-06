import React, {Component} from 'react'

class Howitworks extends Component{
    render(){
        return(
            <section className="work pt-5 whatwedo">
                <div className="container">
                    <div className="work-area">
                        <div className="title mb-5">
                            <h2 className="text-center">What we do</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="work-item mb-5">
                                    <figure className="figure mb-1">
                                        <img src={process.env.PUBLIC_URL + "assets/images/work-icon1.png"} alt="Products" width="118" height="102" />
                                    </figure>
                                    <h4 className="text-center mt-1 mb-3">Brainstorm</h4>
                                    <p className="text-center">Brainstorm the future. Code based on your dreams</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-item mb-5">
                                    <figure className="figure mb-1">
                                        <img src={process.env.PUBLIC_URL + "assets/images/work-icon2.png"} alt="Products" width="90" height="115" />
                                    </figure>
                                    <h4 className="text-center mt-1 mb-3">Code</h4>
                                    <p className="text-center">Design the elements into creation</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-item mb-5">
                                    <figure className="figure mb-1">
                                        <img src={process.env.PUBLIC_URL + "assets/images/work-icon3.png"} alt="Products" width="128" height="122" />
                                    </figure>
                                    <h4 className="text-center mt-1 mb-3">Finalize</h4>
                                    <p className="text-center">FInal product for deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Howitworks