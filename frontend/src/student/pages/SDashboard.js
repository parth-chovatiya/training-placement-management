import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const SDashboard = () => {

  const history = useHistory()
  const [userData, setUserdata] = useState({});

  const callDashboardPage = async () => {
    try{
      const res = await fetch('/api/student/dashboard', {
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
      history.push('/student/login')
    }
  }

  useEffect(() => {
    callDashboardPage()
    console.log(userData)
  }, [])

  return (
    <div>
      <p>Student Dashboard</p>
      <form action="" method="get">
        {/* {userData} */}
        {/* njnjnkn {userData._id} */}
      </form>
    </div>
  )
}

export default SDashboard
