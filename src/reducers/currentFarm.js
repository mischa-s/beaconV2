const initialState = require('../../state')
module.exports = function currentFarm (state = initialState.currentFarm, action) {
  switch (action.type) {

    case 'GET_FARM':
      state = action.payload
      return state

    default:
      return state
  }
}
