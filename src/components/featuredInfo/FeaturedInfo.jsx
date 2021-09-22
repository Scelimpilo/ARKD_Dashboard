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
                <span className="featuredTitle">Actual</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">39</span>
                   
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">R1,225.47</span>
                    
                </div>
               
            </div>
            
        </div>
    )
}
