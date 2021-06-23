import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const CDashboard = () => {

  const history = useHistory()
  const [userData, setUserdata] = useState({});

  const callDashboardPage = async () => {
    try{
      const res = await fetch('/api/company/dashboard', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data)
      setUserdata(data)
      if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
      }
    }catch(err){
      console.log(err)
      history.push('/company/login')
    }
  }

  useEffect(() => {
    callDashboardPage()
    console.log(userData)
  }, [])

  return (
    <div>
      Company Dashboard
    </div>
  )
}

export default CDashboard
