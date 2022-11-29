/*
  AUTHOR: Diego Salas Noain
  FILENAME: dropable-modal.tsx
  SPECIFICATION: 
    - We need to display categories in a modal
  FOR: CS 5364 Information Retrieval Section 001 
*/

import React from "react";

interface ModalContent {
  children: JSX.Element | JSX.Element[];
}

/*
  NAME: DropableModal
  PARAMETERS: props
  PURPOSE: Display a modal with product categories
  PRECONDITION: None
  POSTCONDITION: A DropableModal is returned
*/

const DropableModal: React.FC<ModalContent> = (props) => (
  <div className="dropdown-modal">
    <div className="dropdow-modal-menu right">
      {props.children}
    </div>
  </div>
);

export default DropableModal;
