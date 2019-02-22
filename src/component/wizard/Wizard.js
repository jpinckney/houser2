import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
    this.onCreateHouseHandler = this.onCreateHouseHandler.bind(this)
  }
  handleNameInputChange(value) {
    this.setState({
      name: value,
    });
  }
  handleAddressInputChange(value) {
    this.setState({
      address: value,
    });
  }
  handleCityInputChange(value) {
    this.setState({
      city: value,
    });
  }
  handleStateInputChange(value) {
    this.setState({
      state: value,
    });
  }
  handleZipcodeInputChange(value) {
    this.setState({
      zipcode: value,
    });
  }

  onCreateHouseHandler(name, address, city, state, zipcode) {
    axios.post('/api/createhouse', { name, address, city, state, zipcode })
      .then(res => {
        this.setState({
          houses: res.data,
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: ''
        })
        this.props.history.push('/')
      })

  }



  render() {
    const { name, address, city, state, zipcode } = this.state
    return (
      <div>
        Wizard
        <input
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
          onChange={ (e) => this.handleZipcodeInputChange(e.target.value) }></input>
        <Link to='/'><button>Cancel</button></Link>
        <button onClick={ () => this.onCreateHouseHandler(name, address, city, state, zipcode) }>Complete</button>
      </div>
    )
  }
}
