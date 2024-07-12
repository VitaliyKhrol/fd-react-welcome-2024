import CONSTANTS from "../constants";

export const reducer = (state,action) =>{
    switch (action.type){
        case CONSTANTS.ACTIONS.INPUT_CHANGE :{
            const {name,value} = action; 
            return{...state,
               [name]: value
            }
        }
        default:{
            return state;
        }
    }

}