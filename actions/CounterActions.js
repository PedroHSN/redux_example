
const incrementAction = (value)=> {return {type:'INCREMENT', payload: value || 1}} // a ação virou uma função, desse forma podemos passar o payload pelo argumento;
const decrementAction = (value)=> {return {type:'DECREMENT', payload: value || 1}}

module.exports = {
  incrementAction,
  decrementAction,
}