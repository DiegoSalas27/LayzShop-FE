import React from "react";

interface ModalContent {
  children: JSX.Element | JSX.Element[];
}
const DropableModal: React.FC<ModalContent> = (props) => (
  <div className="dropdown-modal">
    <div className="dropdow-modal-menu right">
      {props.children}
    </div>
  </div>
);

export default DropableModal;
