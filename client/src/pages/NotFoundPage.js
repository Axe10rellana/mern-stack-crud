//importaciones
import React from "react";
import Error404 from "../assets/error404.svg";
import errorStyles from "../styles/Error404.module.css";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className={errorStyles.container}>
      <img src={Error404} alt="Error 404" className={errorStyles.img404} />
      <div className={errorStyles.wrapper}>
        <h1 className={errorStyles.h1}>Error 404</h1>
        <p className={errorStyles.message404}>
          No existe la publicación o la ruta es incorrecta
        </p>
        <Link to="/" className={errorStyles.btnSuccessSm}>
          Volver
        </Link>
      </div>
    </div>
  );
}
