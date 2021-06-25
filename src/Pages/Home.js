import React from 'react';
import homeImg from '../Images/1.png'
import './styles/Home.css'
import {Link} from 'react-router-dom'

function Home (props){
    return (
        <div className='home__image-container'>
            <img src={homeImg} alt="" />
            <div className='link__container'>
                <Link to='/game'> <label> Play! </label></Link>
            </div>
        </div>
    )
}

export default Home;