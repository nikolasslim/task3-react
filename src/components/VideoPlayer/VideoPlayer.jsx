import "./VideoPlayer.css"
import VideoMeta from "./VideoMeta/VideoMeta.jsx";
import VideoDescription from "./VideoDescription/VideoDecription.jsx";
import videoPlayer from '/public/video_player.png'
import mobilePlayer from '/public/mobile_player.png'
const VideoPlayer = () => {
    return (
        <div className="video-player">
            <div className="video">
                <img className="fake-player" src={videoPlayer} alt="video player"/>
                <img className="fake-player mobile" src={mobilePlayer} alt="video player"/>
            </div>
            <VideoMeta/>
            <VideoDescription/>

        </div>
    )
}

export default VideoPlayer