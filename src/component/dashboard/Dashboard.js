import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import House from '../house/House'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    }
    this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this)
  }

  componentDidMount() {
    axios.get('/api/gethouses')
      .then(res => {
        this.setState({
          houses: res.data
        })
      })
  }

  onDeleteClickHandler(id){
    console.log('hit delete from dash')
    axios.delete(`/api/deletehouse/${id}`)
    .then(res => {
      this.setState({
        houses: res.data
      });
    })
    }


  render() {
    const { houses } = this.state
    const mappedHouses = houses.map((houses, id) => {
      return (
        <House
          key={ id }
          id={houses.id}
          name={ houses.name }
          address={ houses.address }
          city={ houses.city }
          state={ houses.state }
          zipcode={ houses.zipcode }
          deleteHouse={this.onDeleteClickHandler}
        />
      )
    })

    return (
      <div>
        Dashboard
        { mappedHouses }
        <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}

