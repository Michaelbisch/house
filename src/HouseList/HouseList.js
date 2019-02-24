import React from 'react';
import House from '../House/House'

export default function HouseList(props) {
    
    const mappedHouses = props.houses.map(house => {
        return(
           <House 
           key={house.house_id}
           house={house}
           />
        )
    })
    return <div>{mappedHouses}</div>
}