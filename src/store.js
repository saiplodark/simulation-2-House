import {createStore} from 'redux';


StepOne(){

}

const initialState = {
    name:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    URL:'',
    mortgage:'',
    rent:''
};

function reducer(state = initialState, action){
    const{type, pauload} = action
    switch(type){
        case Step1:
        case Step2:
        case Step3:    

    }
}