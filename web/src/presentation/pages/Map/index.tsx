import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import classes from "./style.module.scss"
import { useMemo } from 'react'

export function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
  })

  if (!isLoaded) return <div>Loading</div>
  return (
    <Map />
  )
}

function Map() {
  const center = useMemo(() => ({ lat: -23.5489, lng: -46.6388 }), [])
  
  return (
    <GoogleMap 
      zoom={14} 
      center={center}
      mapContainerClassName={classes.map_container}
    >
      <Marker position={{ lat: -23.5489, lng: -46.6388 }} />
      <Marker position={{ lat: -23.5489, lng: -46.6389 }} />
    </GoogleMap>
  )
}