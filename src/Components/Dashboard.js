import React ,{ Component } from 'react'
import House from '../Components/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houseslist:{}
        }
    }

    getHouses(){
        axios.get('/api/houselists')
        .then(results=>{
            this.setState({
                houseslist:results.data
            })
        })
    }


    render(){
        return(
            <div>
                Dashboard
                <House/>
                <Link to="/wizard">
                <button>Add New Property</button>
                </Link>
            </div>
        )

        const houseslist = this.state.houseslist.map(elem =>{
            return <div className='Houselist' key={elem.id}>
                <House />
            </div>
        })
    
    }
}