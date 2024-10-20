import React from 'react';
import './Modal.css';
const ModalPopUp = ({ id, header, body, footer,setShowModal }) => {
  return (
    <div id={id || 'Modal'} className='modal'>
      <div className='modal-content'>
        <div className='header'>
          <div className='close-Modal-icon' onClick={()=> setShowModal(false)}>&times;</div>
          <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className='body'>{body ? body : <div>Body</div>}</div>
        <div className='footer'>{footer ? footer : <h1>Footer</h1>}</div>
      </div>
    </div>
  );
};

export default ModalPopUp;
