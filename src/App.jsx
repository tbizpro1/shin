import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./assets/plugins/bootstrap/css/bootstrap.min.css"
import "./assets/css/main.css"
import "./assets/css/authentication.css"
import "./assets/css/color_skins.css"
import './assets/css/blog.css'
import './assets/css/timeline.css'

import Login from './app/pages/Signin/login'
import Home from './app/pages/Home/blank'
import ProtectedRouter from './app/components/ProtectedRouter/protectedRouter';
import AgentsPage from './app/pages/Socio/socio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/workspace' element={ <ProtectedRouter page={Home}/>} /> */}
        <Route path='/socio' element={<ProtectedRouter page={AgentsPage}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
