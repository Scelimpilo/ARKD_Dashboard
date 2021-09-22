import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className='featured '>
            <div className="featuredItem">
                <span className="featuredTitle">Target</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">250</span>
                    
                    
                </div>
                           </div>
            <div className="featuredItem">
                <span className="featuredTitle">Actual</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">50</span>
                    
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Shift</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">07:00-15:30</span>
                   
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle"></span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">LET'S GO GUYS!</span>
                    
                </div>
               
            </div>
            
        </div>
    )
}
