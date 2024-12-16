import React from "react";
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
// hook para captacao de inputs e que substitui o state
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/post/token";
import { Link } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        loginApi(data)
    };

    return (
        <div className="theme-purple authentication sidebar-collapse">
            <NavBar />
            <div className="page-header">
                <div className="page-header-image" style={{ backgroundImage: 'url(src/assets/images/background-login.jpg)' }}></div>
                <div className="container">
                    <div className="col-md-12 content-center">
                        <div className="card-plain">
                            <form
                                className="form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="header">
                                    <div className="logo-container">
                                        <img src="src/assets/images/stp1.png" alt="SHIN Logo" />
                                    </div>
                                    <h5>Log in</h5>
                                </div>
                                <div className="content">
                                    <div className="input-group input-lg">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="E-mail"
                                            {...register('email')}
                                        />
                                        <span className="input-group-addon">
                                            <i className="zmdi zmdi-account-circle"></i>
                                        </span>
                                    </div>
                                    <div className="input-group input-lg">
                                        <input type="password" placeholder="Password" className="form-control"
                                            {...register('password')}
                                        />
                                        <span className="input-group-addon">
                                            <i className="zmdi zmdi-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="footer text-center">
                                    <button
                                        type="submit"
                                        className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
                                        <Link to="/Home/blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            SIGN IN
                                        </Link>
                                    </button>
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