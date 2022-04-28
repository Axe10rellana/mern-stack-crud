//importaciones
import React from "react";
import GitHub from "./Github";
import LinkeIn from "./LinkeIn";

const Footer = () => {
  //variables
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 px-4 py-4 flex items-center justify-center text-white flex-col">
      &copy; {anioActual} Axe10rellana
      <p className="mt-2">Redes Sociales</p>
      <div className="flex flex-row items-center">
        <a
          href="https://github.com/Axe10rellana"
          target="_blank"
          rel="noreferrer"
          className="mr-1"
        >
          <GitHub fill="#fff" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/axel-orellana/"
          target="_blank"
          rel="noreferrer"
          className="ml-1"
        >
          <LinkeIn fill="#fff" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
