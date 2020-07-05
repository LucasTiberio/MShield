import React, { Component } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import CostumerInfo from './CostumerInfo'

import "../../scss/components/payment-method.scss"

class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.toggleSeparated = this.toggleSeparated.bind(this);
  }

  toggleSeparated() {
    this.props.setSeparated(true)  
  }

  render() {
    return (
      <>
        <CostumerInfo separated={this.props.separated} />
        <div className={`payment-method ${this.props.separated && 'separated'}`}>
          <table>
            <thead>
              <td>type</td>
              <td>details</td>
              <td>country</td>
              <td>status</td>
              <td>registration time</td>
              <td></td>
            </thead>

            <tbody>
              <tr onClick={this.toggleSeparated}>
                <td>CARD</td>
                <td>1234 1234 1234 1234</td>
                <td>GBR</td>
                <td> <span className='success'>SUCCESS</span> </td>
                <td>01/01/01 12:12:21</td>
                <td> <MdKeyboardArrowDown /> </td>
              </tr>
              
              <tr>
                <td>CARD</td>
                <td>1234 1234 1234 1234</td>
                <td>GBR</td>
                <td> <span className='failure'>FAILURE</span> </td>
                <td>01/01/01 12:12:21</td>
                <td> <MdKeyboardArrowDown /> </td>
              </tr>
            </tbody>

          
          </table>
          
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
        </div>
      </>
    )
  }
};

export default PaymentMethod;