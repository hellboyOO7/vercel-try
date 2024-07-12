import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostList } from "../store/post-list-store";
import EmptyList from "./EmptyList";
import LoadingSpinner from "./LoadingSpinner";

const CardList = () => {
  let { postListReducer, addInitialPost } = useContext(PostList);
  let [spinner, setSpinner] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    setSpinner(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setSpinner(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {spinner && <LoadingSpinner />}
      {!spinner && postListReducer.length !== 0 ? (
        <div className="card-list">
          {postListReducer.map((item, idx) => {
            return <Card key={idx} idx={idx} item={item} />;
          })}
        </div>
      ) : (
        !spinner && <EmptyList />
      )}
    </>
  );
};

export default CardList;
