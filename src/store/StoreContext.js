import React from 'react'

const StoreContext = React.createContext({
  listСountries: 0,
  getСountries: () => {},
  addCountry: (countryName) => countryName,
})

export default StoreContext
