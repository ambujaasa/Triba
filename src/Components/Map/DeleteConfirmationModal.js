import React from "react";
import error1 from "../icons/error1.png";
import close1 from "../icons/close1.png";

const DeleteConfirmationModal = ({ onClose, onDeleteConfirm }) => {
  return (
    <div className="delete-confirmation-modal">
      <img src={error1} alt="error1" className="error-image" />
      <img src={close1} alt="close" className="close-image" onClick={onClose} />
      <p className="para-1">You are about to delete a product</p>
      <p className="para-2">Are you sure you want to delete</p>

      <button onClick={onClose} className="cancel-button">
        Cancel
      </button>
      <button onClick={onDeleteConfirm} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default DeleteConfirmationModal;
