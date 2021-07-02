import { combineReducers } from 'redux'

import networkReducer from './network'
import taskReducer from './tasks'

const rootReducer = combineReducers({
    network: networkReducer,
    tasks: taskReducer
})

export default rootReducer