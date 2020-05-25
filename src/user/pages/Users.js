import React, {useEffect, useState} from 'react'

import {useHttpClient} from '../../shared/hooks/http-hook'

import {UsersList} from '../components/UsersList'
import {LoadingSpinner} from '../../shared/components/UIElements/LoadingSpinner'
import {ErrorModal} from '../../shared/components/UIElements/ErrorModal'

export const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState()
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
    
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest('http://localhost:5000/api/users')
            
        setLoadedUsers(responseData.users)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUsers()
  }, [sendRequest])

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} /> 
      {isLoading && 
        <div className="center">
          <LoadingSpinner/>}
        </div>}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers || []}/>}
    </React.Fragment>
  )
}