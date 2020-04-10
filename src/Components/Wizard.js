import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


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
          newhouses: e.target.value
        })
      }

    addhouse(){
        axios.post('/api/addhouse')
        .then(res=>{
            this.setState({
                newhouses:[]
            })
        })
    }
    
    
    render(){
        return(
            <div>
                Wizards
                <Link to='/' >
                <button>Cancel</button>
                </Link>
            </div>
        )
    }
}