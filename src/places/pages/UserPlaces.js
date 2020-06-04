import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useHttpClient} from '../../shared/hooks/http-hook'

import {ErrorModal} from '../../shared/components/UIElements/ErrorModal'
import {LoadingSpinner} from '../../shared/components/UIElements/LoadingSpinner'

import {PlaceList} from '../components/PlaceList'

const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState()
  const {isLoading, error, sendRequest, clearError} = useHttpClient()

  const userId = useParams().userId
  const url = process.env.REACT_APP_BACKEND_URL + `/places/user/${userId}`

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

  const placeDeletedHandler = deletedPlaceId => {
    setLoadedPlaces(
      prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId)
    )
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <div className="center">
        <LoadingSpinner asOverlay/>
        </div>}
      {!isLoading && loadedPlaces && 
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />}
    </React.Fragment>
  )
}

export default UserPlaces
