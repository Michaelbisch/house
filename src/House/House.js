import React, { Component} from 'react'

 class House extends Component{
     render() {
        console.log(this.props)
        const { house } = this.props
        return(
            <div style={{
                margin: '40px'
            }}> 
              
                <p>{house.name}</p>
                <p>{house.address}</p>
                <p>{house.city}</p>
                <p>{house.st}</p>
                <p>{house.zipcode}</p>
                <button onClick={() => this.props.delete(this.props.house.house_id)}>Delete</button>
                
            </div>
        )
    }
}

export default House