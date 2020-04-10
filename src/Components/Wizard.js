import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Wizards extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:''
        }

    }

    changeHandler(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
    
    render(){
        return(
            <div>
                Wizards
                <p>Property Name</p>
                <input
                type='text'
                name = 'name'
                value = {this.state.name}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder ="" 
                />
                <p>Address</p>
                <input
                type='text'
                name = 'address'
                value = {this.state.address}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder ="" 
                />
                <p>City</p>
                <input
                type='text'
                name = 'city'
                value = {this.state.city}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder ="" 
                />
                <p>State</p>
                <input
                type='text'
                name = 'state'
                value = {this.state.state}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder ="" 
                />
                <p>Zip</p>
                <input
                type='number'
                name = 'zip'
                value = {this.state.zip}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder ="0" 
                />
                <Link to='/' >
                <button>Cancel</button>
                </Link>
            </div>
        )
    }
}