import { GoogleMap, useLoadScript, Autocomplete, Marker } from '@react-google-maps/api'
import classes from "./style.module.scss"
import { RefObject, useEffect, useMemo, useRef, useState } from "react"
import axios, { AxiosError } from "axios"
import { Markers } from "./Markers"
import { getGeocode, getLatLng } from 'use-places-autocomplete'
import { FaSearchLocation } from 'react-icons/fa'
import PEVS from '../../../data/pevs.json'

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
  const [getCenter, setGetCenter] = useState({ lat: -23.5489, lng: -46.6388 })
  const [selected, setSelected] = useState<{lat: number, lng: number}>()
  const location = useRef() as RefObject<HTMLInputElement>

  async function updateLocation() {
    const address = location.current?.value 
    const result = await getGeocode({ address })
    const {lat, lng} = await getLatLng(result[0])
    setSelected({ lat, lng })
    setGetCenter({ lat, lng })
  }

  const pev = [{lat: 52, lng: 15},{lat: 52, lng: 15}]

  // async function LoadMarkers() {
  //   try {
  //     const httpResponse = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/pevs/recyclables`)
  //     console.log(httpResponse)
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       console.log(error)
  //     }
  //   }
  // }

  useEffect(() => {
    // LoadMarkers()
    console.log(PEVS)
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
        zoom={12} 
        center={getCenter}
        mapContainerClassName={classes.map_container}
      >
        <AllPevs />
      {selected?.lat !== undefined && (
        <Marker
          position={selected} 
        />    
      )}
      </GoogleMap>
    </>
  )
}

function AllPevs() {
  return (
    <>
      {PEVS.map((item) => {
        return (
          <Markers pev={item} />
        )
      })}
    </>
  )
}
