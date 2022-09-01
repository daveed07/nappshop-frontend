import React from "react";
import StyledModal from "@styles/styledModal";
import X from "@svg-components/X";

const Modal = ({ children, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <StyledModal open={open}>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <X onClick={handleClose} />
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
