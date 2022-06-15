const redux = require('redux')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const {incrementAction, decrementAction} = require('./actions/CounterActions')
const {addItemAction} =require('./actions/ListActions')

const counterReducer = require('./reducers/CounterReducer')
const listReducer =require('./reducers/ListReducer')





const allReducers = combineReducer({ // para usar quantos reducers eu quiser.
  counter: counterReducer,
  list: listReducer,
})

const store = createStore(allReducers)
console.log(store.getState().list)

store.subscribe(()=> {console.log(store.getState().counter)})
store.dispatch(addItemAction('Um novo Item'))
store.dispatch(incrementAction(1))// o dispatch manda uma ação pro reducer e altera o estado
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(2))
store.dispatch(decrementAction(2))


//como o redux altera o estado