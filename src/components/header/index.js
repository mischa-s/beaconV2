const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Header (props) {
  console.log(props, 'props in header')
  const id = 1
  return (
    <div className='header'>
      <div className='headerText'>
        <Link to={'/'}>
          <h1>Beacon Farms</h1>
        </Link>
      </div>
      <div className='navbar'>
        <Link to={`/farm/${id}`}>
          <button>Farms Profiles</button>
        </Link>
        <button>Join The Network</button>
        <button>About</button>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Header)
