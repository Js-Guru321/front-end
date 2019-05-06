import React, {Component} from 'react'

class Review extends Component{
    render(){
        return(
            <section className="customer py-5" id="review"> 
                <div className="container">
                    <div className="customer-area">
                        <div className="title mb-5">
                            <h2 className="text-center">Customer Reviews</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="customer-box my-4">
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="customer-box my-4">
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="customer-box my-4">
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </div>
                        </div>
                        <div className="social">
                            <div className="row">
                                <div className="col-md-4">
                                    <figure className="figure mt-4">
                                        <i className="fab fa-instagram" style={{ fontSize: '85px' }}></i>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="figure mt-4">
                                        <i className="fab fa-youtube" style={{ fontSize: '85px' }}></i>
                                    </figure>
                                </div>
                                <div className="col-md-4">
                                    <figure className="figure mt-4">
                                        <i className="fab fa-twitter" style={{ fontSize: '85px' }}></i>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        
    }
}

export default Review