import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import contentReducer from './content/reducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    contentReducer,
  })

export default createRootReducer
