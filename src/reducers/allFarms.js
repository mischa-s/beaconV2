const initialState = require('../../state')
module.exports = function allFarms (state = initialState.allFarms, action) {
  switch (action.type) {

    case 'GET_ALL_FARMS':
      state = action.payload
      return state

    default:
      return state
  }
}
