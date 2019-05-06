import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Dropdown from 'react-bootstrap/Dropdown'
// import SplitButton from 'react-bootstrap/SplitButton'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Nav from 'react-bootstrap/Nav';
class Product extends Component{
    constructor(props, context){
        super(props, context);
        this.state ={
            key: 'app',
        };
    }
    render(){
        return(
            <section className="product pt-5" id="product"> 
                <div className="container">
                    <div className="product-area">
                        <div className="title mb-5">
                            <h2 className="text-center">Some of our products</h2>
                        </div>
                   
                        {/* <Tab.Container defaultactivekey={this.state.key} onSelect={key => this.setState({ key })}> */}
                        <Tab.Container defaultActiveKey="app">
                        <div className="button-groups mt-3">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
									{/* <Link className="nav-link text-center active" to="#">Design</Link> */}
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-design">
											Design
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item href="">UI & UX</Dropdown.Item>
											<Dropdown.Item href="">Adobe packages</Dropdown.Item>
											<Dropdown.Item href="">Sketch</Dropdown.Item>
											<Dropdown.Item href="">Logo</Dropdown.Item>
											<Dropdown.Item href="">Full webpage</Dropdown.Item>
											<Dropdown.Item href="">Full app</Dropdown.Item>
											<Dropdown.Item href="">Splash screens</Dropdown.Item>
											<Dropdown.Item href="">2d models</Dropdown.Item>
											<Dropdown.Item href="">3d models</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
                                </li>
                                <li className="nav-item">
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-design">
											App
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item href="">Angular</Dropdown.Item>
											<Dropdown.Item href="">React</Dropdown.Item>
											<Dropdown.Item href="">Swift</Dropdown.Item>
											<Dropdown.Item href="">Java</Dropdown.Item>
											<Dropdown.Item href="">Kotlin</Dropdown.Item>
											<Dropdown.Item href="">Html & Css</Dropdown.Item>
											<Dropdown.Item href="">Bootstrap</Dropdown.Item>
											<Dropdown.Item href="">JS</Dropdown.Item>
											<Dropdown.Item href="">VueJs</Dropdown.Item>
											<Dropdown.Item href="">PHP</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
                                </li>
                                <li className="nav-item">
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-design">
											Web
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item href="">Angular</Dropdown.Item>
											<Dropdown.Item href="">React</Dropdown.Item>
											<Dropdown.Item href="">Swift</Dropdown.Item>
											<Dropdown.Item href="">Java</Dropdown.Item>
											<Dropdown.Item href="">Kotlin</Dropdown.Item>
											<Dropdown.Item href="">Html & Css</Dropdown.Item>
											<Dropdown.Item href="">Bootstrap</Dropdown.Item>
											<Dropdown.Item href="">JS</Dropdown.Item>
											<Dropdown.Item href="">VueJs</Dropdown.Item>
											<Dropdown.Item href="">PHP</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="product-item-container pt-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="design">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure mb-4">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/design.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="app">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure mb-4">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/app.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="web">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure mb-4">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="product-item mb-4">
                                                <figure className="figure">
                                                    <img className="img-fluid img-product" src={process.env.PUBLIC_URL + "assets/images/web.jpg"} alt="Products" width="300" height="200" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        </Tab.Container>
                  
                    </div>
                </div>
            </section>
        )
    }
}

export default Product