import React from 'react'
import AddCountry from '../components/AddCountry'
import ListСountries from '../components/ListСountries'

class Home extends React.Component {
  render() {
    return (
      <div className="container mt-3 mb-3">
        <AddCountry />
        <ListСountries />
      </div>
    )
  }
}

export default Home
