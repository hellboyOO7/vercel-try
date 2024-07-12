import { createContext, useReducer } from "react";

const PostList = createContext({
  postListReducer: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const listReducer = (currentList, action) => {
  let newPostList = currentList;
  if (action.type == "DELETE_POST") {
    newPostList = currentList.filter(
      (post, index) => index !== action.payload.idx
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  let [postListReducer, DispatchPostListReducer] = useReducer(listReducer, []);

  const addPost = (userName, userComment, userTags) => {
    DispatchPostListReducer({
      type: "ADD_POST",
      payload: {
        title: userName,
        content: userComment,
        tags: userTags,
      },
    });
  };
  const addInitialPost = (posts) => {
    DispatchPostListReducer({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (idx) => {
    DispatchPostListReducer({
      type: "DELETE_POST",
      payload: {
        idx,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postListReducer, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export { PostList, PostListProvider };
