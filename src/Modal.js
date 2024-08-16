// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50  w-full ">
      <div className="bg-whit p-6 rounded-lg bg-customBlue shadow-lg relative">
        <button
          className="absolute top-5 right-3 text-gray-300 w-full"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
