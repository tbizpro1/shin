import React from "react";
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import MainContent from "../../components/MainContent/maincontent";

const Home = () => {
    return (
        <div className="theme-purple">
            {/* <div className="overlay" style={{display:'none'}}></div> */}
            <TopBar />
            <LeftSideBar />
            <RightSideBar />
            <Chat />
            <MainContent />
        </div>
    )
}

export default Home