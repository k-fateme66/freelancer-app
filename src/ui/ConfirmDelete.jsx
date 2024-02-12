import React from "react";

function ConfirmDelete({ nameSource, onConfirm, onClose, disabled }) {
  return (
    <>
      <p className="text-bold text-base mb-6">
        آیا از حذف {nameSource} مطمئن هستید؟
      </p>
      <div className="flex justify-between gap-x-4 items-center ">
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--primary px-12"
        >
          تایید
        </button>
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--danger px-12"
        >
          لغو
        </button>
      </div>
    </>
  );
}

export default ConfirmDelete;
