import React from "react";
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import MainContent from "../../components/MainContent/maincontent";

const Home = () => {
    return (
        <div className="theme-purple">
            <div className="overlay"></div>
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="m-t-30"><img className="zmdi-hc-spin" src="src/assets/images/logo.svg" width="48" height="48" alt="Compass" /></div>
                    <p>Please wait...</p>
                </div>
            </div>
            {/* <TopBar />
            <LeftSideBar />
            <RightSideBar />
            <Chat />
            <MainContent /> */}
        </div>
    )
}

export default Home