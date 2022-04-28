//importaciones
import React from "react";
import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export function HomePage() {
  //variables del contexto
  const { posts } = usePosts();

  const renderPost = () => {
    if (posts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white" />
          <h1 className="text-white text-2xl">No hay publicaciones</h1>
        </div>
      );
    }

    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-0 sm:mx-4 mb-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    );
  };

  return (
    <main className="text-white">
      <header className="flex flex-col sm:flex-row justify-between my-4 mx-0 sm:mx-4">
        <h1 className="text-2xl mb-4 sm:mb-0 text-gray-300 font-bold">
          Publicaciones ({posts.length})
        </h1>
        <Link
          to="/new"
          className="px-2 py-2 text-sm bg-indigo-600 hover:bg-indigo-500"
        >
          Crear una nueva publicación
        </Link>
      </header>
      {renderPost()}
    </main>
  );
}
