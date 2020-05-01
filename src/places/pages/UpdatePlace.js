import React from 'react'
import {useParams} from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input'
import {Button} from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators'
import {DUMMY_PLACES} from '../../shared/util/dummyPlaces'

export const UpdatePlace = () => {
  const placeId = useParams().placeId

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    )
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  )
}
