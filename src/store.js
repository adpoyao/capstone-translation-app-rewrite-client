import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';


const store = createStore (
  applyMiddleware(thunk)
)

export default store