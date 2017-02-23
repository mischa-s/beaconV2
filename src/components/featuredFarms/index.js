const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')
const _ = require('lodash')

function FeaturedFarms (props) {
  const { allFarms, dispatch } = props
  console.log('farms', allFarms)

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
        _.map(allFarms, (farm) => (
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

module.exports = connect((state) => state)(FeaturedFarms)
