import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HouseList from '../HouseList/HouseList'
import axios from 'axios';

class Dashboard extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
    componentDidMount(){
        this.displayAllHouses()
    }
    displayAllHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }
    deleteHouse(id) {
        axios.delete(`/api/house/${id}`).then(res => {
          this.setState({
            houses: res.data
          });
        });
      }
render(){
    return(
    <div>
        <p>Dashboard</p>
        <Link to='/wizard'><button>Add New Property</button></Link>
        <HouseList 
        houses={this.state.houses}
        delete={this.deleteHouse}
        />
    </div>
    )
}
}

export default Dashboard