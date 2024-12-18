import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    const [menuClicado, setMenuCliclado] = useState(false) //estado para controle de colapso

    const handleMenuCliclado = () => {
        setMenuCliclado(!menuClicado); //inverte o estado atual
    }

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
                            <a href="#" title="Events"><i className="zmdi zmdi-calendar"></i></a>
                            <a href="#" title="Inbox"><i className="zmdi zmdi-email"></i></a>
                            <a href="#" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a>
                            <a href="#" title="Chat App"><i className="zmdi zmdi-comments"></i></a>
                            <a href="/" title="Sign out"><i className="zmdi zmdi-power"></i></a>
                        </div>
                    </li>
                    <li>
                        <a href="#" 
                        className={`menu-toggle waves-effect waves-block ${menuClicado ? 'toggled' : ''}`}
                        onClick={handleMenuCliclado}
                        >
                            <i className="zmdi zmdi-accounts-outline"></i><span>Sócios</span>
                        </a>
                        <ul className="ml-menu" style={{display: menuClicado ? 'block' : 'none'}}>
                            {/* <li><a href="agent.html">Todos os sócios</a></li> */}
                            <li><Link to='/socio'>Todos os sócios</Link></li>
                            <li><a href="add-agent.html">Adicionar sócio</a></li>
                            <li><a href="profile.html">Perfil do sócio</a></li>
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