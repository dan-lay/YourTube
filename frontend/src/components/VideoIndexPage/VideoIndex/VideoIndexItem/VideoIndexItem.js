import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './VideoIndexItem.css';

const VideoIndexItem = (props) => {
   const video = props.video;
   const history = useHistory();
   console.log(video)
   console.log(video.thumbnail)

   return (
      <Link to={`/videos/${video.id}`}>      
         <div className="video-index-item" >
            {/* <video controls="controls autoplay">
               <source type="video/mp4" src={video.mediaObject}/>
            </video> */}
            <img className="thumbnail" src={video.thumbnail}></img>
            <div className='index-item-bottom'>
               <p className='index-title'>{video.title}</p>
            </div>
         
         </div>
      </Link>
   )
}

export default VideoIndexItem;