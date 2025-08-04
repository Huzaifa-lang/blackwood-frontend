import React, { useEffect } from 'react'
import BannerHero from '../components/bannerHero.jsx'
import AllProperties from './allProperties.jsx'
import { useNavigate, useParams, useLocation as useRouterLocation, useSearchParams } from "react-router";
import { useLocation as useAppLocation } from "../context/LocationContext.jsx";


function PropertiesList() {
  
  const { type } = useParams();
    const [searchParams] = useSearchParams();

  const routerLocation = useRouterLocation();
    const navigate = useNavigate();

  const { setLocation , location } = useAppLocation();

  useEffect(()=> {


   const queryString = searchParams.toString();
  navigate(`/properties-list/${location}/${type}${queryString ? `?${queryString}` : ""}`, { replace: true });



  },[location, type, routerLocation.pathname, navigate])
  
  return (
    <>
    <BannerHero title={"Properties for Sale"} subheading={"Browse a wide range of homes for sale across Dubai’s most popular communities and developments."}/>
    <AllProperties/>
    </>
  )
}

export default PropertiesList