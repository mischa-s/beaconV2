const React = require('react')

class addFarmForm extends React.Component {
  handleSubmit () {

  }
  render () {
    <div>
      <form>
        <input
          placeholder='Farm Name'
          className='input'
          ref='farmName' />
        <button onClick={this.handleSubmit.bind(this)}> Submit
        </button>
      </form>
    </div>
  }
}
module.exports = (addFarmForm)
