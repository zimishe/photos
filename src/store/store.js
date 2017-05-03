/**
 * Created by eugene on 03.05.2017.
 */

import initialState from './initialState'
import { createStore } from 'redux'
import reducer from './reducer'

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store