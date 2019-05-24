import { createStore , applyMiddleware , compose } from 'redux';
// thunk(middleWare): for basic Redux side effects logic,
//including complex synchronous logic that needs access to the store,
//and simple async logic like AJAX requests
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//(redux)store:in charge of the global state.
const initialState = {
};
const middleWare = [thunk];
const store = createStore(rootReducer,initialState, compose (
    applyMiddleware(...middleWare)
));

export default store;