import {SET_AUTH_TOKEN, SET_CURRENT_USER} from '../actions/users'

const initialState ={ 
  authToken = null,
  currentUser = null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '':
    return;
  }
}