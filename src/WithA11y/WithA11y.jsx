import "./WithA11y.css";
import { useRef } from "react";

const WithA11y = () => {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  return (
    <>
      <header className="header">this is a header</header>
      <main className="main">
        this is the main content
        <article>this is an article</article>
        <aside>this is an aside section</aside>
        <button>Another Button</button>
        <button onClick={openModal}>Open Modal</button>
      </main>
      <footer className="footer">this is a footer</footer>
      <dialog ref={dialogRef}>
        <h2 lang="es">Esto es un modal, chiques</h2>
        <p tabIndex="0" lang="es">
          Acá estamos dentro de la API de dialog
        </p>
        <p tabIndex="0" lang="es">
          Ahora bien, estamos probando el screen reader
        </p>
        <p tabIndex="0" lang="es">
          Muchos no se sienten cómodos con la letra &quot;e&quot; en el lenguaje
          inclusivo
        </p>
        <p tabIndex="0" lang="es">
          Pero escucharon como suena la &quot;x&quot; o el arroba?, es un
          horror, chiquxs o chic@s
        </p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
};

export default WithA11y;
