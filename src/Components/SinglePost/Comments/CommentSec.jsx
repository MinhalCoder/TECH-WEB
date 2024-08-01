import React, { useState } from 'react';
import './Comment.css';
import { FaRegHeart } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoSendSharp, IoChatbubbleOutline, IoClose } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const CommentSec = () => {
  const location = useLocation();
  const [comments, setComments] = useState([
    { author: 'Alina Nguyen', text: 'Great post! Really enjoyed the insights on Modern web design...', timestamp: '2 hours ago', likes: '1k', avatar: 'assets/Images/author1.png', replies: [] },
    { author: 'Maria Joseph', text: 'I agree! This was very helpful...', timestamp: '30 mins ago', likes: '541', avatar: 'assets/Images/author1.png', replies: [] }
  ]);

  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState('');
  const [replyIndex, setReplyIndex] = useState(null);
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);

  // Determine if the current route should display the comment section
  const shouldShowCommentSec = location.pathname === '/BlogPostPage' || location.pathname === '/SinglePostPage';

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        author: 'New User',
        text: newComment,
        timestamp: 'Just now',
        likes: '0',
        avatar: 'assets/Images/author2.png',
        replies: []
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };

  const handleReplyClick = (index) => {
    setReplyIndex(index);
  };

  const handleAddReply = (index) => {
    if (reply.trim()) {
      const updatedComments = [...comments];
      updatedComments[index].replies.push({
        author: 'New User',
        text: reply,
        timestamp: 'Just now',
        avatar: 'assets/Images/author2.png'
      });
      setComments(updatedComments);
      setReply('');
      setReplyIndex(null);
    }
  };

  const toggleCommentSection = () => {
    setIsCommentSectionVisible(!isCommentSectionVisible);
  };

  if (!shouldShowCommentSec) return null;

  return (
    <>
       <button className="toggle-button" onClick={toggleCommentSection}>
        <IoChatbubbleOutline />
      </button>
      {isCommentSectionVisible && (
        <div className="comment-section">
          <button className="close-button" onClick={toggleCommentSection}>
            <IoClose />
          </button>
          <div className="comment-input">
            <img src="assets/Images/author2.png" alt="User Avatar" className="user-avatar" />
            <textarea
              className="add-comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a Comment..."
            />
            <button className="add-button" onClick={handleAddComment}><IoSendSharp /></button>
          </div>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <img src={comment.avatar} alt={`${comment.author}'s avatar`} className="comment-avatar" />
                <div className="comment-info">
                  <span className="comment-author">{comment.author}</span>
                  <div className="comment-body">
                    <p className="comment-text">{comment.text}</p>
                  </div>
                  {replyIndex === index && (
                    <div className="reply-input">
                      <textarea
                        className="reply-textarea"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Add a reply..."
                      />
                      <button className="reply-button" onClick={() => handleAddReply(index)}><IoIosSend />
                      </button>
                    </div>
                  )}
                  {comment.replies.length > 0 && (
                    <div className="replies">
                      {comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="reply">
                          <img src={reply.avatar} alt={`${reply.author}'s avatar`} className="comment-avatar" />
                          <div className="reply-info">
                            <span className="reply-author">{reply.author}</span>
                            <span className="reply-timestamp">{reply.timestamp}</span>
                          </div>
                          <p className="reply-text">{reply.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="comment-footer">
                <span className="comment-likes">{comment.likes} <FaRegHeart color='white' /></span>
                <button className="comment-reply" onClick={() => handleReplyClick(index)}>Reply</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CommentSec;
