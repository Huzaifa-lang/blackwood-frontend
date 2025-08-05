import React, { useEffect } from 'react'
import BannerHero from '../components/bannerHero.jsx'
import AllProperties from './allProperties.jsx'
import { useNavigate, useParams, useLocation as useRouterLocation, useSearchParams } from "react-router";
import { useLocation as useAppLocation } from "../context/LocationContext.jsx";


function PropertiesList() {
  
  const { setLocation , location } = useAppLocation();
  const { type } = useParams();
  const TypeUpperCase = type.charAt(0).toUpperCase() + type.slice(1)
  const LoactionUperCase = location.charAt(0).toUpperCase() + location.slice(1)
    const [searchParams] = useSearchParams();

  const routerLocation = useRouterLocation();
    const navigate = useNavigate();


  useEffect(()=> {

   const queryString = searchParams.toString();
  navigate(`/properties-list/${location}/${type}${queryString ? `?${queryString}` : ""}`, { replace: true });



  },[location, type, routerLocation.pathname, navigate])
  
  return (
    <>
    <BannerHero backgroundURL={"/bUY.png"} title={`Properties for ${TypeUpperCase}`} subheading={`Browse a wide range of homes for ${type} across ${LoactionUperCase}’s most popular communities and developments.`}/>
    <AllProperties/>
    </>
  )
}

export default PropertiesList