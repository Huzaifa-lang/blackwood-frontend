// src/context/LocationContext.js
import React, { createContext, useState, useContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {

  const [location, setLocation] = useState(()=> {
    const storedLoaction = localStorage.getItem('location')
    return storedLoaction ? storedLoaction : 'pakistan'
   }); // default

  const handleLocationChange = (value) => {
    if(value === location) return
    setLocation(value)
    localStorage.setItem("location", value);


  }
  return (
    <LocationContext.Provider value={{ location, setLocation , handleLocationChange }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
