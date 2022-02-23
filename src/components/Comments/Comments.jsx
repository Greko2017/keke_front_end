import moment from "moment";
import React, { useEffect, useState } from "react";

const Comments = ({ comments, author }) => {
  return (
    <div className="comments">
      <h3 className="title">{comments?.length} Comments</h3>

      {comments && comments instanceof Array
        ? comments.map((comment) => (
            <div key={Math.random()}>
              <div className="mb-3"></div>
              <ul>
                <li>
                  <div className="comment">
                    <figure className="comment-media">
                      <a href="#">
                        <img
                          src={"/assets/images/standard_user.svg"}
                          alt="User name"
                        />
                      </a>
                    </figure>

                    <div className="comment-body">
                      <a href="#" className="comment-reply">
                        Reply
                      </a>
                      <div className="comment-user">
                        <h4>
                          <a href="#">{author?.name}</a>
                        </h4>
                        <span className="comment-date">
                          {moment(comment.createdAt).format("MMM DD, YYYY")}
                        </span>
                      </div>

                      <div className="comment-content">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                  {comment.reply ? (
                    <ul>
                      <li>
                        <div className="comment">
                          <figure className="comment-media">
                            <a href="#">
                              <img
                                style={{ height: "5em", width: "5em" }}
                                src={"/assets/images/standard_user.svg"}
                                alt="User name"
                              />
                            </a>
                          </figure>

                          <div className="comment-body">
                            <a href="#" className="comment-reply">
                              Reply
                            </a>
                            <div className="comment-user">
                              <h4>
                                <a href="#">{comment.reply.author.name}</a>
                              </h4>
                              <span className="comment-date">
                                {comment.reply.createdAt}
                              </span>
                            </div>

                            <div className="comment-content">
                              <p>{comment.reply.content}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ) : null}
                </li>
              </ul>
            </div>
          ))
        : null}
    </div>
  );
};

export default Comments;
