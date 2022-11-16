import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/home/Header'

function Dashboard() {
    const [user, setUser] = useState({
        email: "",
        username: ""
    })

    const router = useRouter()


    const getProfile = async () => {
        const response = await axios.get('../api/profile')
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
        <>  
            <Header></Header>
            <h1>Dashboard</h1>
            <button onClick={getProfile}>
                get profile
            </button>
            <button onClick={logout}>
                Logout
            </button>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </>
    )
}

export default Dashboard