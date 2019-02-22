import React, { Component } from 'react'
import { connect } from 'react-redux'

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  componentDidMount() {
    let { wizard } = this.props.match.params
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(StepOne)



// handleNameInputChange(value) {
//   this.setState({
//     name: value,
//   });
// }
// handleAddressInputChange(value) {
//   this.setState({
//     address: value,
//   });
// }
// handleCityInputChange(value) {
//   this.setState({
//     city: value,
//   });
// }
// handleStateInputChange(value) {
//   this.setState({
//     state: value,
//   });
// }
// handleZipcodeInputChange(value) {
//   this.setState({
//     zipcode: value,
//   });
// }

{/* <input
          value={ name }
          placeholder='Name'
          onChange={ (e) => this.handleNameInputChange(e.target.value) }></input>
        <input
          value={ address }
          placeholder='Address'
          onChange={ (e) => this.handleAddressInputChange(e.target.value) }></input>
        <input
          value={ city }
          placeholder='City'
          onChange={ (e) => this.handleCityInputChange(e.target.value) }></input>
        <input
          value={ state }
          placeholder='State'
          onChange={ (e) => this.handleStateInputChange(e.target.value) }></input>
        <input
          value={ zipcode }
          type='number'
          placeholder='Zipcode'
          onChange={ (e) => this.handleZipcodeInputChange(e.target.value) }></input> */}