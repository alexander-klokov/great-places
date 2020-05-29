import React, {useRef, useState, useEffect} from 'react'

import {Button} from './Button'

import './ImageUpload.css'

export const ImageUpload = props => {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const [isValid, setIsValid] = useState(false)

  const filePickerRef = useRef()

  const pickedHandler = event => {
    const canHandleFile = event.target.files && event.target.files.length === 1
    const maybePickedFile = canHandleFile ? event.target.files[0] : undefined
    const fileIsValid = maybePickedFile

    setFile(maybePickedFile)
    setIsValid(fileIsValid)

    props.onInput(props.id, maybePickedFile, fileIsValid)
  }

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  useEffect(() => {
      if(!file) {
        return
      }
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result)
      }
      fileReader.readAsDataURL(file)

  }, [file])

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please, pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>PICK IMAGE</Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  )
}
