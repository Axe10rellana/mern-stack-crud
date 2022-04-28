//importaciones
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function PostForm() {
  //variables del contexto
  const { createPost, getPost, updatePost } = usePosts();

  //variables de estado
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  //variables del hook del react-router-dom
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost({
          title: post.title,
          description: post.description,
        });
      }
    };
    fetchData();
  }, [params.id, getPost]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-6 shadow-md shadow-black">
        <header className="flex items-center justify-between py-4 text-white">
          <h3 className="text-xl">Nuevo Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Volver Al Inicio
          </Link>
        </header>
        <Formik
          initialValues={post}
          enableReinitialize
          validationSchema={Yup.object({
            title: Yup.string().required("El titulo es requerido"),
            description: Yup.string().required("La descripción es requerida"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }

            actions.resetForm();
            actions.setSubmitting(false);
            navigate("/");
          }}
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Titulo
              </label>
              <Field
                name="title"
                placeholder="Titulo de la publicación"
                autoComplete="off"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-400 text-sm"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Descripción
              </label>
              <Field
                name="description"
                component="textarea"
                placeholder="Descripción de la publicación"
                autoComplete="off"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full resize-none"
                rows={3}
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-400 text-sm"
              />
              <label
                htmlFor="image"
                className="text-sm block font-bold text-gray-400"
              >
                Imagen
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <ErrorMessage
                component="p"
                name="image"
                className="text-red-400 text-sm"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : (
                  "Guardar"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
