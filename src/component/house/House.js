import React from 'react'

export default function House(props) {
  return (
    <div>
      Houses
      Name: { props.name }
      Address: { props.address }
      City: { props.city }
      State: { props.state }
      Zipcode: { props.zipcode }
      <button onClick={ () => props.deleteHouse(props.id) }>Delete</button>
    </div>
  )
}
