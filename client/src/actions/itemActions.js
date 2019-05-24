
//axios:Promise based HTTP client for the browser and node.js
//Automatic transforms for JSON data
//Client side support for protecting against XSRF
import axios from 'axios';
import  {GET_ITEMS , ADD_ITEM , DELETE_ITEM , ITEMS_LOADING } from './types';

//itemActions is in charge of the action's for component "item"
//before forwarding them to the component Reducer

//getItems: in charge to GET all the items in the DB
export const getItems = () => (dispatch) => {
    dispatch(setItemsLoading());
    axios.get('/api/items')
    .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
};

//addItem: in charge of creation of new "item" with the corresponding data
export const addItem = (item) => (dispatch) => {
    axios.post('/api/items', item)
    .then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    }))
};

//deleteItem: in charge of deletion of "item" (by _id)
export const deleteItem = (id) => (dispatch) => {
    axios.delete(`api/items/${id}`)
    .then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
};

//setItemsLoading: in charge of changeing the state while action "getItems" load the items
//can present a visual to indicate: "loading"
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};