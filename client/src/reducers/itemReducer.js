
import  {GET_ITEMS , ADD_ITEM , DELETE_ITEM , ITEMS_LOADING } from '../actions/types'

const initialState ={
        items: [],
        loading: false
    }

    //itemReducer: in charge of Updateing the global state corresponding to each action of the component
    //will be combined to the "rootReducer"
    export default function(state = initialState, action) {
        switch(action.type) {
            case GET_ITEMS:
                return {
                    ...state,
                    items: action.payload,
                    loading: false
                }
            case DELETE_ITEM:
                return {
                    ...state,
                    items: state.items.filter(item => item._id !== action.payload)
                }
            case ADD_ITEM:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
            case ITEMS_LOADING:
                return {
                    ...state,
                    loading: true
                }
            default:
                return state;
        }
    }