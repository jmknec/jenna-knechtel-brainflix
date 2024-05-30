import "./Video.scss";
import Comment from "../Comment/Comment";

function Video({ title, channel, thumbnail, timestamp, comments }) {
  const date = new Date(timestamp);

  return (
    <div className="video">
      <img className="video__thumbnail" src={thumbnail} />
      <div className="video__details">
        <h2 className="video__title">{title}</h2>
        <p className="video__channel">{channel}</p>
        <p className="video__date">{date.toLocaleDateString()}</p>
        <ul className="video__comments">
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
                likes={comment.likes}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Video;
