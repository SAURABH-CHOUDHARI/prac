import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { use } from 'react'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }

    }
  }, [authData])




  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    } else if (authData ) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
      }

    } else {
      alert('Invalid Credintials')
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : null}
      {user == 'employee' ? <EmployeDashboard data={loggedInUserData} changeUser={setUser}/> : null}
    </>
  )
}

export default App