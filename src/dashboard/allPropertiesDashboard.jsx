import React, { useEffect, useState } from 'react'
import SearchBox from './searchBox.jsx'


function AllPropertiesDashboard() {
  const [bothSearch, setBothSearch] = useState('')
  const [country, setCountry] = useState("pakistan");

 

  return (
    <div>
      <SearchBox bothSearch={bothSearch} setBothSearch={setBothSearch} country={country} setCountry={setCountry}/>
      
    </div>
  )
}

export default AllPropertiesDashboard