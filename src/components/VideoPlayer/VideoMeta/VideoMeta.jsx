import "./VideoMeta.css"

const VideoMeta = () => {
    return (
        <div className="video-meta">
            <button className="video-description-btn">
                <img src="../../../../public/arrow.svg" alt="arrow-button"/>
            </button>
            <h2 className="video-name">Dude You Re Getting A Telescope</h2>
            <div className="video-stats">
                <span className="stats-views">123k views</span>
                <div className="stats-buttons">
                    <button><img src="../../../../public/like.svg" alt="like-button"/></button>
                    <button><img src="../../../../public/dislike.svg" alt="dislike-button"/></button>
                    <button className="stats-button full "><img src="../../../../public/share.svg" alt="share-button"/>
                    </button>
                    <button className="stats-button short"><img src="../../../../public/share_short.svg"
                                                                alt="more-button"/></button>
                    <button><img src="../../../../public/more.svg" alt="more-button"/></button>

                </div>
            </div>

        </div>
    )

}
export default VideoMeta