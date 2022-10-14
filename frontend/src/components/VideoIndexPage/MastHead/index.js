import './MastHead.css'
import homelogo from "../../../assets/youtube_logo.png"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from "../../../store/session";
import hamburger from '../../../assets/hamburger.jpg'

const MastHead = () => {
   const dispatch = useDispatch();
   


   const logoutClick = () => {
      dispatch(sessionActions.logout());
   }

   return (
      <div className="masthead">
         <div className='left-masthead'>
            <div className='side-modal-button'>
               <img alt="hmbrgr" src={hamburger} sizes="24x24"/>

            </div>
            <Link className="home-button" to="/">
               <img src={homelogo} alt="HOME" sizes="120x56"/>
            </Link>
         </div>
         <div className='mid-masthead'>

         </div>
         <div className='right-masthead'>
            
         </div>

         <button className="temp-log-out" onClick={logoutClick}>Log Out</button>
      </div>
   )
}

export default MastHead;