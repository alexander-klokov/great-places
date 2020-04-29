import React from 'react'
import {useParams} from 'react-router-dom'

import {PlaceList} from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Neuschwanstein Castle',
    description: 'One of the most visited castles in Germany!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/480px-Schloss_Neuschwanstein_2013.jpg',
    address: 'Neuschwansteinstraße 20, 87645 Schwangau, Germany',
    location: {
      lat: 47.56,
      lng: 10.75
    },
    creator: 'u1'
  }
]

export const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES
    .filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />
}
