const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Header (props) {
  console.log(props, 'props in header')
  return (
    <div className='header'>
      <div className='headerText'>
        <Link to={'/'}>
          <h1>Beacon Farms</h1>
        </Link>
      </div>
      <div className='navbar'>
        <button>Farm Profiles</button>
        <button>Join The Network</button>
        <button>About</button>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Header)
