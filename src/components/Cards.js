import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {/*Card List 1*/}
                    <ul className="cards__items">
                        {/*Card item components*/}
                       <CardItem 
                        src="images/img-9.jpg"
                        text= 'Explore the waterfall inside the Amazon Jungle'
                        label='Adventure'
                         path='/services'
                       />
                       <CardItem 
                        src="images/img-3.jpg"
                        text= 'Sail across the Pacific Ocean'
                        label='Voyage'
                         path='/services'
                       />
                    </ul>
                    {/*Card List 2*/}
                    <ul className="cards__items">
                        {/*Card item components*/}
                       <CardItem 
                        src="images/img-1.jpg"
                        text= 'Climb grand mountains'
                        label='Adventure'
                         path='/services'
                       />
                       <CardItem 
                        src="images/img-8.jpg"
                        text= 'Trek across a desert terrain'
                        label='Traverse'
                         path='/services'
                       />
                       <CardItem 
                        src="images/img-2.jpg"
                        text= 'Find new islands'
                        label='Discover'
                         path='/services'
                       />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
