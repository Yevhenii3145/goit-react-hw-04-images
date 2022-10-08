import React from 'react'
import { useEffect } from "react";
import { createPortal } from "react-dom"
import "../styles.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose, link, descr }) => {

  useEffect(() => {
      document.addEventListener("keydown", closeModal);

      return () => document.removeEventListener("keydown", closeModal)
    });

    const closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            onClose()
        }
      }
        return createPortal(
            <div className="overlay" onClick={closeModal}>
                <div className="modal" onClick={closeModal}>
              <img src={link} alt={descr} />
                </div>
          </div>,
          modalRoot
        )
    

}
export default Modal;

// import React, { Component } from 'react'
// import { createPortal } from "react-dom"
// import  "../styles.css";

// const modalRoot = document.getElementById("modal-root");

// export default class Modal extends Component {
  
  
//   componentDidMount() {
//     document.addEventListener("keydown", this.closeModal);
//   }
//    componentWillUnmount() {
//     document.removeEventListener("keydown", this.closeModal)
//   }
//    closeModal = ({target, currentTarget, code}) => {
//     if (target === currentTarget || code === "Escape") {
//       this.props.onClose();
//     }
//   }
//   render() {
//     const {link,descr} = this.props;
//     return createPortal(
//         <div className="overlay" onClick={this.closeModal}>
//             <div className="modal" onClick={this.closeModal}>
//           <img src={link} alt={descr} />
//             </div>
//       </div>,
//       modalRoot
//     )
//   }
// }
