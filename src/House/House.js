import React from 'react'

function House(props){
    console.log(props)

        return(
            <div style={{
                margin: '40px'
            }}> 
              
                <p>{props.house.name}</p>
                <p>{props.house.address}</p>
                <p>{props.house.city}</p>
                <p>{props.house.st}</p>
                <p>{props.house.zipcode}</p>
                <button>Delete</button>
                
            </div>
        )
    
}

export default House