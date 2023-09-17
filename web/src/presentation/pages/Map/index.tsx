import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import classes from "./style.module.scss"
import { useEffect, useMemo } from 'react'
import axios, { AxiosError } from 'axios'
import { Markers } from './Markers'

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

  async function LoadMarkers() {
    try {
      const httpResponse = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/pevs/recyclables`)
      console.log(httpResponse)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    LoadMarkers()
  }, [])
  
  return (
    <GoogleMap 
      zoom={14} 
      center={center}
      mapContainerClassName={classes.map_container}
    >
     <Markers />
    </GoogleMap>
  )
}