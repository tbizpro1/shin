import React from "react";

const LeftSideBar = () => {
    
    return (
        <aside id="leftsidebar" className="sidebar">
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info">
                            <div className="image">
                                <a href="profile.html">
                                    <img src="src/assets/images/profile_av.jpg" alt="User" />
                                </a>
                            </div>
                            <div className="detail">
                                <h4>Lucas</h4>
                                <small>Tech Lead at Inovat</small>
                            </div>
                            <a href="events.html" title="Events"><i className="zmdi zmdi-calendar"></i></a>
                            <a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email"></i></a>
                            <a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a>
                            <a href="chat.html" title="Chat App"><i className="zmdi zmdi-comments"></i></a>
                            <a href="sign-in.html" title="Sign out"><i className="zmdi zmdi-power"></i></a>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);" className="menu-toggle waves-effect waves-block toggled">
                            <i className="zmdi zmdi-accounts-outline"></i><span>Sócios</span>
                        </a>
                        <ul className="ml-menu" style={{display :  'block'}}>
                            <li><a className=" waves-effect waves-block">Todos os sócios</a></li>
                            <li><a className=" waves-effect waves-block">Adicionar sócio</a></li>
                            <li><a className=" waves-effect waves-block">Perfil do sócio</a></li>
                        </ul>
                    </li>
                    {/* <li><a href="reports.html"><i className="zmdi zmdi-file-text"></i><span>Dashboard</span></a></li>
                    <li>
                        <a href="javascript:void(0);" className="menu-toggle">
                            <i className="zmdi zmdi-apps"></i><span>App</span>
                        </a>
                        <ul className="ml-menu">
                            <li><a href="mail-inbox.html">Inbox</a></li>
                            <li><a href="chat.html">Chat</a></li>
                            <li><a href="events.html">Calendar</a></li>
                            <li><a href="file-dashboard.html">File Manager</a></li>
                            <li><a href="contact.html">Contact list</a></li>
                            <li><a href="blog-dashboard.html">Blog</a></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </aside>
    );
};

export default LeftSideBar;