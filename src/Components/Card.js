import React from 'react';

import './styles/Card.css'
import back from '../Images/Symbol/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png'
import { symbol } from 'prop-types';
 export default function Card (props){
    return(
        <div className='Card'>
            {/* <img src={back} alt="" onClick={props.handleClickOnCard} /> */}
            <img src={props.photo} alt="" onClick={props.handleClickOnCard} />
        </div>
    )
 }
    