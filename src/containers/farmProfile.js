const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const request = require('superagent')

class FarmProfile extends React.Component {

  componentWillMount () {
    const { dispatch, allFarms } = this.props
    const id = Number(this.props.routeParams.id)
    if (!allFarms) {
      request.get('/api/v1/farms', (err, res) => {
        const theFarms = res.body
        if (err) throw err
        else {
          dispatch({type: 'GET_ALL_FARMS', payload: theFarms})
          const farm = theFarms.find((farm) => farm.id === id)
          dispatch({type: 'GET_FARM', payload: farm})
        }
      })
    } else {
      const farm = allFarms.find((farm) => farm.id === id)
      dispatch({type: 'GET_FARM', payload: farm})
    }
  }
  render () {
    const { currentFarm, dispatch } = this.props
    return (
      <div className='currentFarm'>
        <h2 className='currentFarmHeaderText'>{currentFarm.name}, {currentFarm.location}</h2>
        <div className='currentFarmContent'>
          <div className='farmImage'>
            <img src={currentFarm.mainImage} />
          </div>
          <div className='currentFarmDescription'>
            <h3>{currentFarm.type}</h3>
            {currentFarm.description}
          </div>
        </div>
        <div className='currentFarmMap'>
          <Map dispatch={dispatch} allFarms={[currentFarm]} />
        </div>
      </div>
    )
  }
}

module.exports = connect((state) => state)(FarmProfile)
