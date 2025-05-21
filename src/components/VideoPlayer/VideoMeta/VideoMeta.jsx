import "./VideoMeta.css"

const VideoMeta = () => {
    return (
        <div className="video-meta">
            <button className="video-description-btn">
                <img src="src/assets/icons/arrow.svg" alt="arrow-button"/>
            </button>
            <h2 className="video-name">Dude You Re Getting A Telescope</h2>
            <div className="video-stats">
                <span className="stats-views">123k views</span>
                <div className="stats-buttons">
                    <button><img src="src/assets/icons/like.svg" alt="like-button"/></button>
                    <button><img src="src/assets/icons/dislike.svg" alt="dislike-button"/></button>
                    <button className="stats-button full "><img src="src/assets/icons/share.svg" alt="share-button"/>
                    </button>
                    <button className="stats-button short"><img src="src/assets/icons/share_short.svg"
                                                                alt="more-button"/></button>
                    <button><img src="src/assets/icons/more.svg" alt="more-button"/></button>

                </div>
            </div>

        </div>
    )

}
export default VideoMeta