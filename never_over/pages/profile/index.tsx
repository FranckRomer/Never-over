import React, { useEffect, useState } from 'react'
import Header from '../../components/home/Header'
import axios from 'axios'
import { useRouter } from 'next/router'

const Profile = () => {
  const [user, setUser] = useState({
    email: "",
    username: ""
  })
  const router = useRouter()

  useEffect(() => {
    getProfile()
  },[])

  const getProfile = async () => {
    const response = await axios.get('../api/profile')
    console.log(response);
    setUser(response.data)
  }

  const logout = async () => {
    try {
      const response = await axios.get('../api/auth/logout')
      setUser(response.data)
    } catch (error) {
      //
    }
    router.push("../login")
  }
  return (
    <div>
      <Header></Header>
      <p>Profile</p>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Profile