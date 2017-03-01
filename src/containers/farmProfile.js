const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')
const request = require('superagent')
const _ = require('lodash')

class FarmProfile extends React.Component {

  componentWillMount () {
    console.log('componentWillMount')
    const { dispatch, allFarms } = this.props
    if (!allFarms) {
      request.get('/api/v1/farms', (err, res) => {
        const theFarms = res.body
        if (err) throw err
        else {
          dispatch({type: 'GET_ALL_FARMS', payload: theFarms})
          console.log(
          theFarms.filter(this.filterById)((farm) => {
            dispatch({type: 'GET_FARM', payload: farm})
          })
        )
        }
      })
    } else {
      allFarms.filter(this.filterById)((farm) => {
        console.log('made it past the filter')
        dispatch({type: 'GET_FARM', payload: farm})
      })
    }
  }
  filterById (farm) {
    console.log(farm.id)
    console.log(farm.id === 1, 'result')
  }
  render () {
    const { currentFarm } = this.props
    return (
      <div>
        <h2>
          {currentFarm.name}
        </h2>
      </div>
    )
  }
}

module.exports = connect((state) => state)(FarmProfile)

// Page is loading, are the farms loaded? If not return object with the right keys and no data

// When farms are loaded, rerender the page with the farm data
