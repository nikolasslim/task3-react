import "./VideoPlayer.css"
import VideoMeta from "./VideoMeta/VideoMeta.jsx";
import VideoDescription from "./VideoDescription/VideoDecription.jsx";

const VideoPlayer = () => {
    return (
        <div className="video-player">
            <div className="video">
                <img className="fake-player" src="../../../public/video_player.png" alt="video player"/>
                <img className="fake-player mobile" src="../../../public/mobile_player.png" alt="video player"/>
            </div>
            <VideoMeta/>
            <VideoDescription/>

        </div>
    )
}

export default VideoPlayer