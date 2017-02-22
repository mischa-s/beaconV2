const React = require('react')
const { connect } = require('react-redux')

function Header (props) {
  return(
    <div className='header'>
      <div className='headerText'>
        <h1>Beacon Farms</h1>
      </div>
      <button>Farms Profiles</button>
      <button>Join The Network</button>
      <button>About</button>
    </div>
  )
}

module.exports = connect((state) => state)(Header)
