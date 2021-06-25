import react from 'react';
import React from 'react'

import Card from '../Components/Card'
import './styles/Game.css'
import BackGroundImg from '../Images/inlruc64xuh51.png'

let numberOfCards = 30;
let cardClickOne = undefined
let cardClickTwo = undefined

class Game extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: false
        }
        numberOfCards = 24
        ;

    }
    
    componentDidMount(){
        this.fetchData();

        
    }
    
    async fetchData(){
        

        let page = this.getRandomInt(0,34);
        let url = `https://rickandmortyapi.com/api/character?page=${page}`;
        
        await fetch(url)
        .then(response => response.json())
        .then(data => this.setState({fetchedData: data.results}));
        console.log(this.state.fetchedData)    

        this.asignPhotos();
    }


    asignPhotos(){
        let photos  = []
        
        for (let index = 0; index < numberOfCards/2; index++) {
            photos.push(this.state.fetchedData[index].image)              
        }
        for (let index = 0; index < numberOfCards/2; index++) {
            photos.push(this.state.fetchedData[index].image)              
        }

        photos = photos.sort(function() {return Math.random()-0.5})
        this.setState({photos: photos})
    }
    
    getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
      
    }

    handleClickOnCard = (e) => {
        if (cardClickOne === undefined){
            cardClickOne = e.target.currentSrc
            console.log(cardClickOne)
        }else{
            cardClickTwo = e.target.currentSrc
            console.log(cardClickTwo)
            if (cardClickOne === cardClickTwo){
                alert('zon iguales putito')
                cardClickOne = undefined;
            }else{
                alert('zon diferentez putito')
                cardClickOne = undefined;
            }
        }

        
        
    }
    render(){

        let cards = [];
        for (let index = 0; index < numberOfCards; index++) {
            cards.push(<Card/>)  
        }

        if(this.state.photos){
            return(
                <React.Fragment>
                    

                    <div className='game'>

                        <div className='img-container'>
                            <img src={BackGroundImg} alt="" />
                        </div>
                        
                        <div className='cards__container'>

                            {cards.map((card, i) => 
                                <Card 
                                    obj={card} 
                                    key={i} 
                                    photo={this.state.photos[i]}
                                    handleClickOnCard={this.handleClickOnCard}
                                />)
                            }
                        </div>

                        <div className='chrono'>
                            <p>Time: 00:00</p>
                        </div>

                    </div>

                </React.Fragment>

            )

        } else{
            return <h1>Cargando putito</h1>
        }
    }
       
    
}

export default Game;