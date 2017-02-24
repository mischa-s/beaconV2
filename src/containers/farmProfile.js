const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')
const request = require('superagent')
const _ = require('lodash')

function FarmProfile (props) {
  const { allFarms, dispatch } = props
  const id = 1

  function getTheFarms () {
    request.get('/api/v1/farms', (err, res) => {
      if (err) throw err
      dispatch({type: 'GET_ALL_FARMS', payload: res.body})
    })
  }
  if (!allFarms) getTheFarms()

  return (
    <div className='listOfFarms'>
      {
        _.filter(allFarms)(id === 'id')((farm) => (
          <div className='eachFarm' key={farm.id}>
            <h3>{farm.name}, {farm.location}</h3>
            <div className='farmImage'>
              <img src={farm.mainImage} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

module.exports = connect((state) => state)(FarmProfile)
