import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className=" py-16 px-8 bg-stone-900 text-stone-50 md: w-72 rounded-r-xl"
    >
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
