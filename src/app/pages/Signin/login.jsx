import React, { useContext } from "react";
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
// hook para captacao de inputs e que substitui o state
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/post/token";
import Cookies from "js-cookie";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {setToken} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    let navigate = useNavigate();

    const onSubmit = data => {
        console.log("aguardando resposta da api...")

        loginApi(data).then(response => {
            Cookies.set("token", response.token)
            setToken(Cookies.get("token"))
            alert("Um momento, estamos lhe encaminhamos para sua área de trabalho!")
            return navigate("/workspace");
        })
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
                                            SIGN IN
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
            <Outlet />
        </div>
    );
}

export default Login;