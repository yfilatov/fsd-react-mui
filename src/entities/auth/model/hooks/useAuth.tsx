import { useContext } from 'react'
import { authContext } from '../providers/authContext';


function useAuth() {
  return (
    useContext(authContext)
  )
}

export default useAuth
