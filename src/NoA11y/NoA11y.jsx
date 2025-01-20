import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./NoA11y.css";

const Modal = ({ isOpen, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <div
          tabIndex="0"
          className="close"
          onKeyDown={handleKeyDown}
          onClick={onClose}
        >
          &times;
        </div>
        <div tabIndex="0">Hola chiques, estamos dentro de un modal</div>
        <div tabIndex="0">Esto tiene un focus trap mal implementado</div>
        <div tabIndex="0">Porque puedo navegar por fuerta del modal</div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const NoA11y = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      openModal();
    }
  };

  return (
    <>
      <div className="header">this is a header</div>
      <div className="main">
        this is the main content
        <div>this is an article</div>
        <div>this is an aside section</div>
        <button onClick={openModal}>Open Modal</button>
      </div>
      <div className="footer">this is a footer</div>
      <Modal
        onKeyDown={handleKeyDown}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default NoA11y;
