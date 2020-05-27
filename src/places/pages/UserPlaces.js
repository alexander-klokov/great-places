import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useHttpClient} from '../../shared/hooks/http-hook'

import {ErrorModal} from '../../shared/components/UIElements/ErrorModal'
import {LoadingSpinner} from '../../shared/components/UIElements/LoadingSpinner'

import {PlaceList} from '../components/PlaceList'

export const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState()
  const {isLoading, error, sendRequest, clearError} = useHttpClient()

  const userId = useParams().userId
  const url = `http://localhost:5000/api/places/user/${userId}`

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(url)
        setLoadedPlaces(responseData.places)
      } catch (e) {
        console.error(e)
      }
    }
    fetchPlaces()
  }, [sendRequest, userId, url])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <div className="center">
        <LoadingSpinner asOverlay/>
        </div>}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} />}
    </React.Fragment>
  )
}
