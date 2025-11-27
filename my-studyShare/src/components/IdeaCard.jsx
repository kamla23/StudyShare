import React, { useState } from "react";
import "../styles/ideacard.css";

const IdeaCard = ({ idea, onLike, onComment, onEdit, onDelete }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(idea.comments || []);

  const handleAddComment = () => {
    if (commentText.trim() === "") return;

    const newComments = [...comments, commentText];
    setComments(newComments);
    setCommentText("");
    setShowCommentBox(false);

    // Also notify parent component if needed
    if (onComment) {
      onComment(idea.id, commentText);
    }
  };

  return (
    <div className="idea-card">
      <h3 className="idea-user">{idea.user}</h3>
      <h2 className="idea-title">{idea.title}</h2>
      <p className="idea-desc">{idea.desc}</p>

      <div className="tags">
        {idea.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      <div className="idea-buttons">
        <button className="btn like" onClick={() => onLike(idea.id)}>
          Like ({idea.likes})
        </button>

        <button
          className="btn comment"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          Comment
        </button>

        <button className="btn edit" onClick={() => onEdit(idea.id)}>
          Edit
        </button>

        <button className="btn delete" onClick={() => onDelete(idea.id)}>
          Delete
        </button>
      </div>

      {showCommentBox && (
        <div className="comment-box">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleAddComment}>Add</button>
        </div>
      )}

      <div className="comments-section">
        {comments.length > 0 ? (
          comments.map((cmt, i) => (
            <p key={i} className="comment">{cmt}</p>
          ))
        ) : (
          <p className="no-comments">No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;
