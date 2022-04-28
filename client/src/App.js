//importaciones
import React from "react";
import { HomePage, PostForm, NotFoundPage } from "./pages";
import { PostProvider } from "./context/postContext";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-zinc-500 flex items-center">
        <div className="m-auto">
          <PostProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new" element={<PostForm />} />
              <Route path="/posts/:id" element={<PostForm />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PostProvider>
          <Toaster />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
