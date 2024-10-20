import React, { useState } from 'react';
import ModalPopUp from './ModalPopUp';
import './Modal.css';
const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalPopUp = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button onClick={handleModalPopUp}>Open Modal</button>
      {showModal && <ModalPopUp body={"I am the body that come as props"} setShowModal={setShowModal} />}
    </div>
  );
};

export default ModalTest;
