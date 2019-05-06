import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Review extends Component{
    render(){
        return(
            <section className="customer py-5" id="review"> 
                <div className="container">
                    <div className="customer-area">
                        <div className="title mb-5">
                            <h2 className="text-center">Customer Reviews</h2>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <div className="customer-box" style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-box" style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-box" style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-box" style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="customer-box" style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
                                    <h4 className="mb-4">SuperTech</h4>
                                    <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                            
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