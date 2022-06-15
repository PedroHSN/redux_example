module.exports = function listReducer(state = ['Um item padrão'], action){

  switch (action.type) {
    case 'ADD_ITEM':
            return [...state, action.payload] //gera um novo array com os items ja listados + o payload

    default:
      return state
  }
}