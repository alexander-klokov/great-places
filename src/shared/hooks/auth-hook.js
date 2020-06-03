import {useState, useEffect, useCallback} from 'react'

const TOKEN_EXPIRATION = 1000 * 60 * 60 // 1 hour

let logoutTimer

export const useAuth = () => {
    const [token, setToken] = useState(false)
    const [tokenExpirationDate, setTokenExpirationDate] = useState()
    const [userId, setUserId] = useState(null)
  
    const login = useCallback((uid, token, expirationDate) => {
      setUserId(uid)
      setToken(token)
      const tokenExpirationDate = 
        expirationDate || new Date(new Date().getTime() + TOKEN_EXPIRATION)
      setTokenExpirationDate(tokenExpirationDate)
  
      localStorage.setItem(
        'userData', 
        JSON.stringify({userId: uid, token, expiration: tokenExpirationDate.toISOString()})
      )
    }, [])
  
    const logout = useCallback(uid => {
      setUserId(null)
      setToken(null)
      setTokenExpirationDate(null)
      localStorage.removeItem('userData')
    }, [])
  
    useEffect(() => {
      if (token && tokenExpirationDate) {
        const remainingTime = tokenExpirationDate.getTime() - new Date()
        logoutTimer = setTimeout(logout, remainingTime)
      } else {
        clearTimeout(logoutTimer)
      }
    }, [token, logout, tokenExpirationDate])
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('userData'))
      const expirationDate = new Date(storedData && storedData.expiration)
      if (storedData && storedData.token && expirationDate > new Date()) {
        login(storedData.userId, storedData.token, expirationDate)
      }
    }, [login])
  
  return {token, userId, login, logout}
}

