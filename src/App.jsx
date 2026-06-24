import { BrowserRouter, Route, Router, Routes } from 'react-router'
import './App.css'
import Header from './common/Header'
import Topheader from './common/Topheader'
import Member_Apply from './pages/Member_Apply'
import IdCard from './IdCardDownload'
import Mainlayout from './common/Mainlayout'
import IdCardDownload from './IdCardDownload'
import UpComming from './pages/UpComming'
import Donate from './pages/Donate'
import Donors from './pages/Donors'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
import Important_link from './pages/Important_link'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import Team_Member from './pages/Team_Member'
import Latest_event from './pages/Latest_event'
import Donation from './pages/Donation'
import Manegment_team from './pages/Manegment_team'
import Environment from './pages/Environment'
import Social_Walfare from './pages/Social_Welfare'
import Health from './pages/Health'



function App() {
  return (
    <>
      <Topheader />

      <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout/>}>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/member_apply'} element={<Member_Apply/>}/>
        <Route path={'/idcarddownload'} element={<IdCardDownload/>}/>
        <Route path={'/upcomming'} element={<UpComming/>}/>
        <Route path={'/donate'} element={<Donate/>}/>
        <Route path={'/donors'} element={<Donors/>}/>
        <Route path={'/gallery'} element={<Gallery/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/importantlink'} element={<Important_link/>}/>
        <Route path={'/login'} element={<LogIn/>}/>
        <Route path={'/team_member'} element={<Team_Member/>}/>
        <Route path={'/latestevent'} element={<Latest_event/>}/>
        <Route path={'/donation'} element={<Donation/>}/>
        <Route path={'/manegment_team'} element={<Manegment_team/>}/>

        <Route path={'/environment'} element={<Environment/>}/>
        <Route path={'/socile_walfare'} element={<Social_Walfare/>}/>
        <Route path={'/health'} element={<Health/>}/>

       
       </Route>
      </Routes>
      </BrowserRouter>
     

      

      
      
    </>
  )
}

export default App
