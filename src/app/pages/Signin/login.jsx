import React from "react";
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

const Login = () => {
    return (
        <div className="theme-purple authentication sidebar-collapse">
            <NavBar />
            <div className="page-header">
                {/* <div className="page-header-image" style={{ backgroundImage: 'url(src/assets/images/login.jpg)' }}></div> */}
                <div className="container">
                    <div className="col-md-12 content-center">
                        <div className="card-plain">
                            <form className="form">
                                <div className="header">
                                    <div className="logo-container">
                                        <img src="src/assets/images/logo.svg" alt="SHIN Logo" />
                                    </div>
                                    <h5>Log in</h5>
                                </div>
                                <div className="content">
                                    <div className="input-group input-lg">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="E-mail" />
                                        <span className="input-group-addon">
                                            <i className="zmdi zmdi-account-circle"></i>
                                        </span>
                                    </div>
                                    <div className="input-group input-lg">
                                        <input type="password" placeholder="Password" className="form-control" />
                                        <span className="input-group-addon">
                                            <i className="zmdi zmdi-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="footer text-center">
                                    <a href="index.html"
                                        className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
                                        SIGN IN
                                    </a>
                                    <h6 className="m-t-20">
                                        <a href="forgot-password.html" className="link">Forgot Password?</a>
                                    </h6>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;