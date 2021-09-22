
import './topbar.css'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';





export default function TopBar() {
    return (
       <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
                   <span className='logo'>Aeroklasduys</span>
               </div>
               <div className="topRight">
                   <div className="topbarIconsContainer">
                       <CircleNotificationsIcon/>
                       <span className="topIconBadge">2</span>
                   </div>
                   <div className="topbarIconsContainer">
                       <LanguageIcon/>
                      
                   </div>
                   <div className="topbarIconsContainer">
                       <SettingsIcon/>
                       
                   </div>
                   <img src="https://media.istockphoto.com/photos/middle-aged-man-portrait-picture-id1285156699?s=612x612" alt="" className="topAvatar" />
                
               </div>
           </div>


       </div>
    )
}