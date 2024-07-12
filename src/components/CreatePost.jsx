import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  let { addPost } = useContext(PostList);

  let userNameElement = useRef();
  let userCommentElement = useRef();
  let userTagsElement = useRef();

  let handleSubmit = (event) => {
    event.preventDefault();
    let userName = userNameElement.current.value;
    let userComment = userCommentElement.current.value;
    let userTags = userTagsElement.current.value.split(" ");
    addPost(userName, userComment, userTags);
    userNameElement.current.value = "";
    userCommentElement.current.value = "";
    userTagsElement.current.value = "";
  };

  return (
    <form style={{ width: "80%", marginTop: "4rem" }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          ref={userNameElement}
          placeholder="Enter your name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Comment
        </label>
        <textarea
          ref={userCommentElement}
          style={{ height: "15rem", resize: "none" }}
          placeholder="Enter your comment here"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashTags" className="form-label">
          Hashtag
        </label>
        <input
          ref={userTagsElement}
          type="text"
          className="form-control"
          id="hashTags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreatePost;
