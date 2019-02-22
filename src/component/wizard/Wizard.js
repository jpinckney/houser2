import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import StepThree from '../StepThree'


export default class Wizard extends Component {
  constructor(props) {
    super(props);
    
    this.onCreateHouseHandler = this.onCreateHouseHandler.bind(this)
  }
  
 



  render() {
    const { name, address, city, state, zipcode } = this.state
    return (
      <div>
      
        Wizard
        
        <Link to='/'><button>Cancel</button></Link>
        
      </div>
    )
  }
}
