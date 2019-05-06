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
                                        <i className="fas fa-brain" style={{ fontSize: '100px'}}></i>
                                    </figure>
                                    <h4 className="text-center mt-1 mb-3">Brainstorm</h4>
                                    <p className="text-center">Brainstorm the future. Code based on your dreams</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-item mb-5">
                                    <figure className="figure mb-1">
                                        <i className="far fa-file-code" style={{ fontSize: '100px'}}></i>
                                    </figure>
                                    <h4 className="text-center mt-1 mb-3">Code</h4>
                                    <p className="text-center">Design the elements into creation</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-item mb-5">
                                    <figure className="figure mb-1">
                                        <i className="far fa-check-circle" style={{ fontSize: '100px'}}></i>
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