import {createStore} from 'redux';

const initialState = {
    name:'',
    address:'',
    city:'',
    state:'',
    zipcode:''
};

function reducer(state = initialState, action){
    const{type, pauload} = action
    switch(type){
        case StepOne:
            return{
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
                />}
    }
}