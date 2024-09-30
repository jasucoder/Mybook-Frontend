




import {combineReducers} from 'redux'
import CountReducer from './CoReducer'
import LoginReducer from './LoginReducer'
import CartReducer from './CartReducer'
//import LoginReducer from './Loginreducer'

export default combineReducers({

    CountReducer,
   LoginReducer,
   CartReducer
})

