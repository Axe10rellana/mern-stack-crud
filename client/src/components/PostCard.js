//importaciones
import React, { useState } from "react";
import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PostCard = ({ post }) => {
  //variables del contexto
  const { deletePost } = usePosts();

  //variables de estado
  const [loading, setLoading] = useState(false);

  //variables del hook de react-router-dom
  const navigate = useNavigate();

  //funciones
  const handleDelete = (_id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            ¿Estas seguro de que quieres eliminar esta publicación con el id:
            <strong>{_id}</strong>?
          </p>
          <div>
            <button
              type="button"
              className="bg-red-600
              hover:bg-red-400
              px-3
              py-2
              text-white
              rounded-sm
              mx-2"
              onClick={() => {
                deletePost(_id);
                setLoading(true);
                toast.dismiss(t.id);
              }}
            >
              Eliminar
            </button>
            <button
              type="button"
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000",
        style: {
          backgroundColor: "#202020",
        },
      }
    );
    setLoading(false);
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h2 className="font-bold capitalize text-xl">{post.title}</h2>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
            className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm disabled:bg-red-400"
            disabled={loading}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
            ) : (
              "Eliminar"
            )}
          </button>
        </div>
      </div>
      {post.image && (
        <img
          src={post.image.url}
          alt={post.title}
          className="w-full h-80 object-cover"
        />
      )}
      <p className="px-4 py-4">{post.description}</p>
    </div>
  );
};

export default PostCard;
