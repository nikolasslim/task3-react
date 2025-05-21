import "./VideoMeta.css"
import likeIcon from '/public/like.svg'
import dislikeIcon from '/public/dislike.svg'
import arrowIcon from '/public/arrow.svg'
import shareIcon from '/public/share.svg'
import shareShortIcon from '/public/share_short.svg'
import moreIcon from '/public/more.svg'

const VideoMeta = () => {
    return (
        <div className="video-meta">
            <button className="video-description-btn">
                <img src={arrowIcon} alt="arrow-button"/>
            </button>
            <h2 className="video-name">Dude You Re Getting A Telescope</h2>
            <div className="video-stats">
                <span className="stats-views">123k views</span>
                <div className="stats-buttons">
                    <button><img src={likeIcon} alt="like-button"/></button>
                    <button><img src={dislikeIcon} alt="dislike-button"/></button>
                    <button className="stats-button full "><img src={shareIcon} alt="share-button"/>
                    </button>
                    <button className="stats-button short"><img src={shareShortIcon}
                                                                alt="more-button"/></button>
                    <button><img src={moreIcon} alt="more-button"/></button>

                </div>
            </div>

        </div>
    )

}
export default VideoMeta