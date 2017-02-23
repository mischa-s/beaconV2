const React = require('react')
const { connect } = require('react-redux')
const Map = require('../components/map')
const FeaturedFarms = require('../components/featuredFarms')

function Home (props) {
  const { dispatch, allFarms } = props
  return (
    <div>
      <Map dispatch={dispatch} allFarms={allFarms} />
      <FeaturedFarms allFarms={allFarms} dispatch={dispatch} />
    </div>
  )
}

module.exports = connect((state) => state)(Home)
