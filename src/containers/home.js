const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')
const AddFarmForm = require('../components/addFarmForm')

function Home (props) {
  const { dispatch, allFarms } = props
  return (
    <div className='homeContainer'>
      <div className='homepageMap'>
        <Map dispatch={dispatch} allFarms={allFarms} />
      </div>
      <FeaturedFarms allFarms={allFarms} dispatch={dispatch} />
      <AddFarmForm dispatch={dispatch} />
    </div>
  )
}

module.exports = connect((state) => state)(Home)
