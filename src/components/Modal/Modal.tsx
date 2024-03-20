import {FC, useEffect, useRef} from "react";
import { createPortal } from "react-dom";
import './Modal.css'
import React from "react";

type ModalProps = {
  children: React.ReactNode,
  open: boolean
};

const Modal: FC<ModalProps> = ({ children, open }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal()
    } else {
      dialog.current?.close()
    }
  }, [open]);

  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    modalRoot
  );
};

export default Modal;
