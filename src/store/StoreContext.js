import React from 'react'

const StoreContext = React.createContext({
  statusText: '',
  countries: 0,
  getСountries: () => { },
  addCountry: (countryName) => countryName,
})

export default StoreContext
