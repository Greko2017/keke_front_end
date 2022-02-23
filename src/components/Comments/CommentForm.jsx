import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addComment, submitComment } from "../../services/blog";
import { addPost } from "../../store/actions/blog";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const nameEl = useRef();
  const emailEl = useRef();
  const commentEl = useRef();
  const storeDataEl = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    setLocalStorage(window.localStorage);
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, [dispatch]);

  const handlePostSubmission = (e) => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: email } = emailEl.current;
    const { value: name } = nameEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !email || !name || !storeData) {
      setError(true);
      return;
    }
    const commentObj = { comment, email, name, slug };
    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
    }
    addComment(commentObj)
      .then((res) => {
        console.log(`res`, res);
      })
      .catch((err) => {
        console.error(err);
      });
    // try {
    //   dispatch(addPost(commentObj));
    // } catch (error) {
    //   console.error(error);
    //   setShowSuccessMessage(true);
    //   setTimeout(() => {
    //     setShowSuccessMessage(false);
    //   }, 3000);
    // }
  };

  return (
    <div className="reply">
      <div className="heading">
        <h3 className="title">Leave A Reply</h3>
        <p className="title-desc">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form action="#">
        <label htmlFor="reply-message" className="sr-only">
          Comment
        </label>
        <textarea
          ref={commentEl}
          name="reply-message"
          id="reply-message"
          cols="30"
          rows="4"
          className="form-control"
          required
          placeholder="Comment *"
        ></textarea>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="reply-name" className="sr-only">
              Name
            </label>
            <input
              ref={nameEl}
              type="text"
              className="form-control"
              id="reply-name"
              name="reply-name"
              required
              placeholder="Name *"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="reply-email" className="sr-only">
              Email
            </label>
            <input
              ref={emailEl}
              type="email"
              className="form-control"
              id="reply-email"
              name="reply-email"
              required
              placeholder="Email *"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-2">
          <div>
            <input
              ref={storeDataEl}
              type="checkbox"
              id="storeData"
              name="storeData"
              value="true"
            />
            <label
              style={{ color: "gray", marginLeft: ".5em", cursor: "pointer" }}
              htmlFor="storeData"
            >
              {" "}
              Save my name, email in this browser for the next time I comment.
            </label>
          </div>
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "1em" }}>
            All fields are mandatory
          </p>
        )}

        <div
          onClick={(e) => handlePostSubmission(e)}
          // type="submit"
          className="btn btn-outline-primary-2"
        >
          <span>POST COMMENT</span>
          <i className="icon-long-arrow-right"></i>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
