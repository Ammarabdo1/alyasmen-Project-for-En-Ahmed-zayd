import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import toggle_theme_reducer from './reducers/colorReducer'

const store = createStore(toggle_theme_reducer, composeWithDevTools())

export default store;