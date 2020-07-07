import React, { Component } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CostumerInfo from './CostumerInfo'

import "../../scss/components/payment-method.scss"

class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }

    this.enableSeparated = this.enableSeparated.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  enableSeparated() {
    if(window.innerWidth > 768) {
      this.props.setSeparated(true)  
    }else{
      this.toggleModal();
    }
  }

  render() {
    return (
      <>
        <CostumerInfo separated={this.props.separated} />
        <div className={`payment-method ${this.props.separated && 'separated'}`}>
          <div className='table-responsive'>
            <table>
              <thead>
                <tr>
                  <td>type</td>
                  <td>details</td>
                  <td>country</td>
                  <td>status</td>
                  <td>registration time</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                <tr onClick={this.enableSeparated}>
                  <td>CARD</td>
                  <td>1234 12•• •••• 1234</td>
                  <td>GBR</td>
                  <td> <span className='success'>SUCCESS</span> </td>
                  <td>05 Dec, 2017, 12:50 am</td>
                  <td> <MdKeyboardArrowDown /> </td>
                </tr>
                
                <tr onClick={this.enableSeparated}>
                  <td>CARD</td>
                  <td>1234 12•• •••• 1234</td>
                  <td>GBR</td>
                  <td> <span className='failure'>FAILURE</span> </td>
                  <td>05 Dec, 2017, 12:50 am</td>
                  <td> <MdKeyboardArrowDown /> </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className='table-footer'>
              <span>
                <MdKeyboardArrowLeft />
                Prev
              </span>
              <span>
                1-10 of 10
              </span>
              <span>
                Next
                <MdKeyboardArrowRight />
              </span>
          </div>

          <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Detalhes sobre o pagamento</ModalHeader>

            <ModalBody>
              <div className='info'>
                <span className='name'>Zachar Morgany</span>

                <span className='description'>CustZachary</span>

                <span className='mail'>d+zachm@rexemple.com</span>
                
                <span className='number'>+447874125478</span>
              </div>
             </ModalBody>
              
             <ModalFooter>
               <Button color="secondary" onClick={this.toggleModal}>Close</Button>
             </ModalFooter>

           </Modal>
        </div>
      </>
    )
  }
};

export default PaymentMethod;