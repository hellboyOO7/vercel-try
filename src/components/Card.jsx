import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PostList } from "../store/post-list-store";

const Card = ({ item, idx }) => {
  let { deletePost } = useContext(PostList);
  return (
    <div className="cardBody">
      <div className="heading-container">
        <h5 className="card-title cardHeading">{item.title}</h5>
        <RxCross2 onClick={() => deletePost(idx)} style={{ color: "red" }} />
      </div>
      <p className="card-text bodyCard">{item.body}</p>
      {item.tags.map((tag, key) => {
        return (
          <span key={key} className="badge text-bg-primary hashTag">
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Card;
