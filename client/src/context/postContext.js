//importaciones
import { useState, createContext, useContext, useEffect } from "react";
import {
  createPostRequest,
  getPostsRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";

//crear contexto
const postContext = createContext();

//exportar el contexto
export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Falta el proveedor de publicación");
  return context;
};

export const PostProvider = ({ children }) => {
  //variables de estado
  const [posts, setPosts] = useState([]);

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await getPostsRequest();
      setPosts(res.data);
    };
    fetchData();
  }, []);

  //funciones
  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <postContext.Provider
      value={{
        posts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
