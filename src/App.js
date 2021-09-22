import Sidebar from "./components/topbar/sidebar/Sidebar"
import TopBar from "./components/topbar/TopBar"
import './app.css'
import Home from './pages/home/Home'

function App() {
  return (
    <div>
      <TopBar/>
      <div className="container">
        
        <div className="home">
          <Home/>
        

        </div>
       
      </div>
    </div>
  )
}

export default App
