import Moment from "react-moment";

function Comment({ comment }) {
  return (
    <div className="ml-10 overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-thin">
      <div className="flex items-center space-x-2 mb-3">
        <img
          src={comment.data().userImage}
          alt=""
          className="h-7 rounded-full"
        />
        <p className="text-sm flex-1">
          <span className="font-bold">{comment.data().username}</span>{" "}
          {comment.data().comment}
        </p>

        <Moment fromNow className="pr-5 text-xs text-gray-400">
          {comment.data().timestamp?.toDate()}
        </Moment>
      </div>
    </div>
  );
}

export default Comment;
