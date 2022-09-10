import { useEffect, useState } from 'react';
import Link from 'next/link';

const Modal = ({ activate, content, closeButton, title }) => {

  const [open, setOpen] = useState(activate ? activate : false);

  useEffect(() => {
    document.getElementById('content').addEventListener('click', () => {
      closePC();
    });
  })

  const closePC = () => {
    setOpen(false);
  }

  const CloseButton = () => {
    return (
      <div role="button" aria-label="Close" className="modal_close-container disable-highlight">
        <div onClick={ () => closePC() } className="modal_close" id="modal_close" aria-label="Close">&times;</div>
      </div>
    )
  }
  
  return (
    <>{open ?
      <div className="modal" id="modal">
        { closeButton ? closeButton : <CloseButton /> }
        <div className="modal-container" id="modal_container">
          <div className="modal-content">
            { title ? 
              <div className="modal_title">
                <div>{ title }</div>
              </div> : <></> }
            <div className="modal_container">
              { content }
            </div>
          </div>
        </div>
      </div>:<></>}
    </>)
}

export default Modal;