import './App.css'
import Header from "./components/Header/Header.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation.jsx";

function App() {
    return (
        <>
            <Header/>
            <div className="content">
                <VideoPlayer/>
                <Sidebar/>
            </div>
            <MobileNavigation/>

        </>
    )
}

export default App
