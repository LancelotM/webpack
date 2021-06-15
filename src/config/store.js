import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const logger = ({ getState }) => {
    return next => action => {
      console.log('will dispatch', action)
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
      console.log('state after dispatch', getState())
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }
  
const applyMiddlewareArgs = [
    thunkMiddleware,
    logger,
]

const composedEnhancer = composeWithDevTools(applyMiddleware(...applyMiddlewareArgs))

export const store = createStore(rootReducer,composedEnhancer)