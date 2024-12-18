import React from "react";

const AgentCard = ({ avatar, name, location, teamAvatars, startupAvatars, phone, email, socialLinks }) => (
  <div className="col-lg-4 col-md-6">
    <div className="card agent">
      <div className="agent-avatar">
        <a href="profile.html">
          <img src={avatar} className="img-fluid" alt="" />
        </a>
      </div>
      <div className="agent-content">
        <div className="agent-name">
          <h4>
            <a href="profile.html">{name}</a>
          </h4>
          <span>{location}</span>
          <ul className="list-unstyled team-info m-b-0">
            <li className="m-r-15">
              <small>Team</small>
            </li>
            {teamAvatars.map((teamAvatar, index) => (
              <li key={index}>
                <img src={teamAvatar} alt="Avatar" />
              </li>
            ))}
          </ul>
          <ul className="list-unstyled team-info m-b-0">
            <li className="m-r-15">
              <small>Startup</small>
            </li>
            {startupAvatars && startupAvatars.length > 0 ? (
              startupAvatars.map((startupAvatar, index) => (
                <li key={index}>
                  <img src={startupAvatar} alt="Avatar" />
                </li>
              ))
            ) : null}

          </ul>
        </div>
        <ul className="agent-contact-details">
          <li>
            <i className="zmdi zmdi-phone"></i>
            <span>{phone}</span>
          </li>
          <li>
            <i className="zmdi zmdi-email"></i>
            {email}
          </li>
        </ul>
        <ul className="social-icons">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a className={link.class} href={link.href}>
                <i className={`zmdi ${link.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const AgentsPage = () => {
  const agentsData = [
    {
      avatar: "src/assets/images/lg/avatar1.jpg",
      name: "Tim Hank",
      location: "Teresina, Piauí",
      teamAvatars: [
        "src/assets/images/profile_av.jpg",
        // "assets/images/xs/avatar9.jpg",
      ],
      startupAvatars: [
        "src/assets/images/stp.jpg",
        // "assets/images/xs/avatar9.jpg",
      ],
      phone: "(123) 123-456",
      email: "info@example.com",
      socialLinks: [
        { class: "facebook", href: "#", icon: "zmdi-facebook" },
        { class: "twitter", href: "#", icon: "zmdi-twitter" },
        { class: "gplus", href: "#", icon: "zmdi-google-plus" },
        { class: "linkedin", href: "#", icon: "zmdi-linkedin" },
      ],
    },
    {
      avatar: "src/assets/images/lg/avatar2.jpg",
      name: "Gary Camara",
      location: "Campinas, São Paulo",
      teamAvatars: [
        "src/assets/images/profile_av.jpg",
        // "assets/images/xs/avatar3.jpg",
        // "assets/images/xs/avatar4.jpg",
      ],
      startupAvatars: [
        "src/assets/images/stp.jpg",
        // "assets/images/xs/avatar9.jpg",
      ],
      phone: "(123) 123-456",
      email: "info@example.com",
      socialLinks: [
        { class: "facebook", href: "#", icon: "zmdi-facebook" },
        { class: "twitter", href: "#", icon: "zmdi-twitter" },
        { class: "gplus", href: "#", icon: "zmdi-google-plus" },
        { class: "linkedin", href: "#", icon: "zmdi-linkedin" },
      ],
    },
    // Adicione mais agentes conforme necessário
  ];

  return (
    <section className="content agent">
      <div className="block-header">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h2>
              All Agents
              <small className="text-muted">Welcome to Shin</small>
            </h2>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <button
              className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
              type="button"
            >
              <i className="zmdi zmdi-plus"></i>
            </button>
            <ul className="breadcrumb float-md-right">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="zmdi zmdi-home"></i> Shin
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Agents</a>
              </li>
              <li className="breadcrumb-item active">All Agents</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row clearfix">
          {agentsData.map((agent, index) => (
            <AgentCard
              key={index}
              avatar={agent.avatar}
              name={agent.name}
              location={agent.location}
              teamAvatars={agent.teamAvatars}
              startupAvatars={agent.startupAvatars}
              phone={agent.phone}
              email={agent.email}
              socialLinks={agent.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsPage;