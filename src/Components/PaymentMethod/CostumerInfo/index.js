import React from 'react';
import ImageMaps from '../../../assets/maps.jpg';

const CostumerInfo = props => (
  <div className={`costumer-info ${props.separated && 'separated'}`}>
    <div>
      <div className='map'>
        <img alt="Maps" src={ImageMaps} />
      </div>


      <div className='info'>
        <span className='name'>Zachar Morgany</span>

        <span className='description'>CustZachary</span>

        <span className='mail'>d+zachm@rexemple.com</span>
        
        <span className='number'>+447874125478</span>
      </div>

    </div>
  </div>
);

export default CostumerInfo;