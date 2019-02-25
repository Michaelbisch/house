import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component  {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            st: '',
            zipcode: '',
            
        }
    }
    handleName(val){
        this.setState({
            name: val
        })
    }
    handleAddress(val) {
        this.setState({
            address: val
        })
    }
    handleCity(val) {
        this.setState({
            city: val
        })
    }
    handleSt(val) {
        this.setState({
            st: val
        })
    }
    handleZipcode(val) {
        this.setState({
            zipcode: val
        })
    }
    postHouse(){
        const { name, address, city, st, zipcode } = this.state;
        axios.post('/api/house', {name, address, city, st, zipcode,}).then( () => {
            this.setState({
                name: '',
                address: '',
                city: '',
                st: '',
                zipcode: '',
            })
        })
    }
    render () {
        return(
             <div>
                 <input type='text' placeholder='Name' value={this.state.name} onChange={ e => this.handleName(e.target.value)}></input>
                 <input type='text' placeholder='Address' value={this.state.adress} onChange={ e => this.handleAddress(e.target.value)}></input>
                 <input type='text' placeholder='City' value={this.state.city} onChange={ e => this.handleCity(e.target.value)}></input>
                 <input type='text' placeholder='State' value={this.state.st} onChange={ e => this.handleSt(e.target.value)}></input>
                 <input type='text' placeholder='Zipcode' value={this.state.zipcode} onChange={ e => this.handleZipcode(e.target.value)}></input>
                 <Link to='/'><button onClick={() => this.postHouse()}>Add Home</button></Link>
                 <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard