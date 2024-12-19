// import React from "react";
// import TopBar from "../../components/TopBar/topbar";
// import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
// import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
// import Chat from "../../components/Chat/chat";
// import { useState } from "react";
// import { Plus, Facebook, Twitter, Instagram, Home, Camera, MapPin, Briefcase } from 'lucide-react';

// export const Perfil = () => {
//     const [activeTab, setActiveTab] = useState('mypost');
//     const [activeSideTab, setActiveSideTab] = useState('about');

//     const skills = [
//         { name: 'Marketing', value: 89, color: 'bg-blue-500' },
//         { name: 'Maths', value: 56, color: 'bg-green-500' },
//         { name: 'Communication', value: 78, color: 'bg-amber-500' },
//         { name: 'English', value: 43, color: 'bg-pink-500' }
//     ];

//     const friends = [
//         { name: 'Jackson', date: 'Today', image: '/api/placeholder/100/100' },
//         { name: 'Aubrey', date: 'Yesterday', image: '/api/placeholder/100/100' },
//         { name: 'Oliver', date: '08 Nov', image: '/api/placeholder/100/100' },
//         { name: 'Isabella', date: '12 Dec', image: '/api/placeholder/100/100' },
//         { name: 'Jacob', date: '12 Dec', image: '/api/placeholder/100/100' },
//         { name: 'Matthew', date: '17 Dec', image: '/api/placeholder/100/100' }
//     ];

//     return (
//         <div className="theme-purple">
//             <TopBar />
//             <LeftSideBar />
//             <RightSideBar />
//             <Chat />
//             <section className="content profile-page">
//                 <div className="p-4">
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-6">
//                         <div>
//                             <h2 className="text-2xl font-bold">Agent Profile</h2>
//                             <p className="text-gray-500">Welcome to Compass</p>
//                         </div>
//                         <div className="flex items-center gap-4">
//                             <button className="p-2 rounded-full bg-blue-500 text-white">
//                                 <Plus className="w-4 h-4" />
//                             </button>
//                             <div className="flex gap-2 text-gray-600">
//                                 <Home className="w-4 h-4" /> <span>Compass</span> / Agent / Profile
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//                         {/* Left Column */}
//                         <div className="lg:col-span-4">
//                             {/* Profile Card */}
//                             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                                 <div className="bg-cyan-500 p-4">
//                                     <h4 className="text-white text-xl">Michael Dorsey</h4>
//                                 </div>
//                                 <div className="p-4 text-center">
//                                     <img
//                                         src="/api/placeholder/150/150"
//                                         alt="Profile"
//                                         className="rounded-full mx-auto w-32 h-32"
//                                     />
//                                     <div className="flex justify-center gap-4 mt-4">
//                                         <button className="p-2 rounded-full bg-blue-500 text-white">
//                                             <Facebook className="w-4 h-4" />
//                                         </button>
//                                         <button className="p-2 rounded-full bg-blue-500 text-white">
//                                             <Twitter className="w-4 h-4" />
//                                         </button>
//                                         <button className="p-2 rounded-full bg-blue-500 text-white">
//                                             <Instagram className="w-4 h-4" />
//                                         </button>
//                                     </div>
//                                     <p className="text-gray-600 mt-4">
//                                         795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
//                                     </p>
//                                     <hr className="my-4" />
//                                     <div className="grid grid-cols-3 gap-4">
//                                         <div>
//                                             <h5 className="text-xl font-bold">852</h5>
//                                             <small className="text-gray-500">Following</small>
//                                         </div>
//                                         <div>
//                                             <h5 className="text-xl font-bold">13k</h5>
//                                             <small className="text-gray-500">Followers</small>
//                                         </div>
//                                         <div>
//                                             <h5 className="text-xl font-bold">234</h5>
//                                             <small className="text-gray-500">Posts</small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Tabs Section */}
//                             <div className="bg-white rounded-lg shadow-md mt-6">
//                                 <div className="flex border-b">
//                                     <button
//                                         className={`px-4 py-2 ${activeSideTab === 'about' ? 'border-b-2 border-blue-500' : ''}`}
//                                         onClick={() => setActiveSideTab('about')}
//                                     >
//                                         About
//                                     </button>
//                                     <button
//                                         className={`px-4 py-2 ${activeSideTab === 'friends' ? 'border-b-2 border-blue-500' : ''}`}
//                                         onClick={() => setActiveSideTab('friends')}
//                                     >
//                                         Friends
//                                     </button>
//                                 </div>

//                                 <div className="p-4">
//                                     {activeSideTab === 'about' ? (
//                                         <div>
//                                             {/* About Content */}
//                                             <div className="space-y-4">
//                                                 {[
//                                                     { label: 'Position', value: 'Agent' },
//                                                     { label: 'Estate', value: 'Cleveland' },
//                                                     { label: 'Email', value: 'michael@gmail.com' },
//                                                     { label: 'Phone', value: '+ 202-555-0191' }
//                                                 ].map((item, index) => (
//                                                     <div key={index}>
//                                                         <small className="text-gray-500">{item.label}:</small>
//                                                         <p>{item.value}</p>
//                                                         <hr />
//                                                     </div>
//                                                 ))}

//                                                 {/* Skills */}
//                                                 <div className="space-y-4">
//                                                     {skills.map((skill, index) => (
//                                                         <div key={index}>
//                                                             <div className="flex justify-between mb-1">
//                                                                 <span>{skill.name}</span>
//                                                                 <span>{skill.value}%</span>
//                                                             </div>
//                                                             <div className="w-full bg-gray-200 rounded-full h-2">
//                                                                 <div
//                                                                     className={`${skill.color} h-2 rounded-full`}
//                                                                     style={{ width: `${skill.value}%` }}
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                                             {friends.map((friend, index) => (
//                                                 <div key={index} className="text-center">
//                                                     <img
//                                                         src={friend.image}
//                                                         alt={friend.name}
//                                                         className="w-16 h-16 rounded-lg mx-auto"
//                                                     />
//                                                     <h6 className="mt-2 font-medium">{friend.name}</h6>
//                                                     <small className="text-gray-500">{friend.date}</small>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Column */}
//                         <div className="lg:col-span-8">
//                             <div className="bg-white rounded-lg shadow-md">
//                                 <div className="flex border-b">
//                                     {['My Post', 'Timeline', 'Setting'].map((tab) => (
//                                         <button
//                                             key={tab}
//                                             className={`px-6 py-3 ${activeTab === tab.toLowerCase().replace(' ', '')
//                                                     ? 'border-b-2 border-blue-500'
//                                                     : ''
//                                                 }`}
//                                             onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
//                                         >
//                                             {tab}
//                                         </button>
//                                     ))}
//                                 </div>

//                                 <div className="p-6">
//                                     {/* Content based on active tab would go here */}
//                                     <div className="text-gray-600">
//                                         Tab content for {activeTab} would be displayed here.
//                                         {/* Additional content components can be added based on requirements */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// AgentProfile.jsx

import React, { useContext, useState } from 'react';
import { Facebook, Twitter, Instagram, Plus, Home } from 'lucide-react';
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import { AuthContext } from '../../context/authContext';

const AgentProfile = () => {
  const [activeTab, setActiveTab] = useState('mypost');
  
  return (
    <div className="theme-purple">
      <TopBar />
      <LeftSideBar />
      <RightSideBar />
      <Chat />
    <section className="content profile-page">
      <Header />
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12">
            <ProfileCard />
            <AboutCard />
          </div>
          <div className="col-lg-8 col-md-12">
            <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

const Header = () => (
  <div className="block-header">
    <div className="row">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>
          Agent Profile
          <small className="text-muted">Welcome to Compass</small>
        </h2>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">
        <button className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10">
          <Plus size={24} />
        </button>
        <Breadcrumb />
      </div>
    </div>
  </div>
);

const Breadcrumb = () => (
        <ul className="breadcrumb float-md-right">
          <li className="breadcrumb-item">
            <a href="index.html">
              <Home size={18} /> Compass
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Agent</a>
          </li>
          <li className="breadcrumb-item active">Agent Profile</li>
        </ul>
      );


const ProfileCard = () => {
//puxa do authcontext as informacoes armazenadas de dentro do estado user
const {user} = useContext(AuthContext)

    return (
        <div className="card member-card">
          <div className="header l-cyan">
            <h4 className="m-t-10">{user?.username || 'não encontrado'}</h4>
          </div>
          <div className="member-img">
            <a href="profile.html">
              <img 
                src="/api/placeholder/150/150" 
                className="rounded-circle" 
                alt="profile-image"
              />
            </a>
          </div>
          <div className="body">
            <div className="col-12">
              <SocialLinks />
              <p className="text-muted">
                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
              </p>
            </div>
            <hr />
            <Stats />
          </div>
        </div>
      );
}
    

const SocialLinks = () => (
  <ul className="social-links list-unstyled">
    <li>
      <a href="#" title="facebook">
        <Facebook size={18} />
      </a>
    </li>
    <li>
      <a href="#" title="twitter">
        <Twitter size={18} />
      </a>
    </li>
    <li>
      <a href="#" title="instagram">
        <Instagram size={18} />
      </a>
    </li>
  </ul>
);

const Stats = () => (
  <div className="row">
    <StatItem count="852" label="Following" />
    <StatItem count="13k" label="Followers" />
    <StatItem count="234" label="Post" />
  </div>
);

const StatItem = ({ count, label }) => (
  <div className="col-4">
    <h5>{count}</h5>
    <small>{label}</small>
  </div>
);

const AboutCard = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className="card">
      <ul className="nav nav-tabs">
        <TabItem 
          id="about" 
          label="About"
          activeTab={activeTab}
          onClick={() => setActiveTab('about')}
        />
        <TabItem 
          id="friends" 
          label="Friends"
          activeTab={activeTab}
          onClick={() => setActiveTab('friends')}
        />
      </ul>
      <div className="tab-content">
        {activeTab === 'about' ? <AboutContent /> : <FriendsContent />}
      </div>
    </div>
  );
};

const TabItem = ({ id, label, activeTab, onClick }) => (
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === id ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  </li>
);

const AboutContent = () => (
  <div className="tab-pane body active" id="about">
    <InfoItem label="Position" value="Agent" />
    <InfoItem label="Estate" value="Cleveland" />
    <InfoItem label="Email address" value="michael@gmail.com" />
    <InfoItem label="Phone" value="+ 202-555-0191" />
    <SkillsList />
  </div>
);

const InfoItem = ({ label, value }) => (
  <>
    <small className="text-muted">{label}: </small>
    <p>{value}</p>
    <hr />
  </>
);

const SkillsList = () => {
  const skills = [
    { name: 'Marketing', progress: 89, color: 'l-blue' },
    { name: 'Maths', progress: 56, color: 'l-green' },
    { name: 'Communication', progress: 78, color: 'l-amber' },
    { name: 'English', progress: 43, color: 'l-blush' },
  ];

  return (
    <ul className="list-unstyled">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </ul>
  );
};

const SkillItem = ({ name, progress, color }) => (
  <li>
    <div>{name}</div>
    <div className="progress m-b-20">
      <div
        className={`progress-bar ${color}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className="sr-only">{progress}% Complete</span>
      </div>
    </div>
  </li>
);

const FriendsContent = () => {
  const friends = [
    { name: 'Jackson', joinDate: 'Today', image: 'avatar1.jpg' },
    { name: 'Aubrey', joinDate: 'Yesterday', image: 'avatar2.jpg' },
    { name: 'Oliver', joinDate: '08 Nov', image: 'avatar3.jpg' },
    { name: 'Isabella', joinDate: '12 Dec', image: 'avatar4.jpg' },
    { name: 'Jacob', joinDate: '12 Dec', image: 'avatar1.jpg' },
    { name: 'Matthew', joinDate: '17 Dec', image: 'avatar5.jpg' },
  ];

  return (
    <div className="tab-pane body" id="friends">
      <ul className="new_friend_list list-unstyled row">
        {friends.map((friend) => (
          <FriendItem key={friend.name} {...friend} />
        ))}
      </ul>
    </div>
  );
};

const FriendItem = ({ name, joinDate, image }) => (
  <li className="col-lg-4 col-md-2 col-sm-6 col-4">
    <a href="#">
      <img
        src={`/api/placeholder/100/100`}
        className="img-thumbnail"
        alt={name}
      />
      <h6 className="users_name">{name}</h6>
      <small className="join_date">{joinDate}</small>
    </a>
  </li>
);

const MainContent = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'mypost', label: 'My Post' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'usersettings', label: 'Setting' },
  ];

  return (
    <>
      <div className="card">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              id={tab.id}
              label={tab.label}
              activeTab={activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </ul>
      </div>
      {/* <div className="tab-content">
        {activeTab === 'mypost' && <MyPosts />}
        {activeTab === 'timeline' && <Timeline />}
        {activeTab === 'usersettings' && <UserSettings />}
      </div> */}
    </>
  );
};

// You would then implement MyPosts, Timeline, and UserSettings components similarly
// I've omitted them for brevity but they would follow the same pattern of breaking
// down into smaller, reusable components

// Você implementaria então os componentes MyPosts, Timeline e UserSettings de forma semelhante
// Eu os omiti por questões de brevidade, mas eles seguiriam o mesmo padrão de quebra
//dividido em componentes menores e reutilizáveis

export default AgentProfile