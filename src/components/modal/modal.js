import React,{ Component } from 'react';
import Modal from 'react-modal';
import './modal.scss';

class ModalComponent extends Component {
  render(){
  const {closeTimeoutMS,isOpen,className,onRequestClose,shouldCloseOnOverlayClick,children} = this.props;
  return (
    <Modal
    className = {className}
    isOpen = {isOpen}
    onRequestClose = {onRequestClose}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    ariaHideApp={false}
    closeTimeoutMS={closeTimeoutMS}
    >
     <div>
       {children}
     </div>    
    </Modal>
  )
}
}
export default ModalComponent;