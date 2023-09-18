import { GoogleMap, useLoadScript, Autocomplete, Marker } from '@react-google-maps/api'
import classes from "./style.module.scss"
import { LegacyRef, RefObject, useEffect, useMemo, useRef, useState } from "react"
import axios, { AxiosError } from "axios"
import { Markers } from "./Markers"
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { FaSearchLocation } from 'react-icons/fa'

export function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: ["places"]
  })

  if (!isLoaded) return <div className={classes.loading}>Carregando...</div>
  return (
    <Map />
  )
}

function Map() {
  const center = useMemo(() => ({ lat: -23.5489, lng: -46.6388 }), [])
  const [getCenter, setGetCenter] = useState({ lat: -23.5489, lng: -46.6388 })
  const [selected, setSelected] = useState<{lat: number, lng: number}>()
  const location = useRef() as RefObject<HTMLInputElement>

  async function updateLocation() {
    const address = location.current?.value 
    const result = await getGeocode({ address })
    const {lat, lng} = await getLatLng(result[0])
    console.log()
    setSelected({ lat, lng })
    setGetCenter({ lat, lng })
    console.log(setSelected, 'result')
  }

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
    <>
      <div className={classes.combobox}>
        <Autocomplete>
          <input
            ref={location}
            placeholder="Buscar por locais de coleta"
          />
        </Autocomplete>
        <button onClick={() => updateLocation()}>
          <FaSearchLocation />
        </button>
      </div>
      <GoogleMap 
        zoom={14} 
        center={getCenter}
        mapContainerClassName={classes.map_container}
      >
      <Markers />
      {selected?.lat !== undefined && (
        <Marker
          position={selected} 
        />    
      )}
      </GoogleMap>
    </>
  )
}
