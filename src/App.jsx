import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/api/students')
      if (response) {
        setStudents(response.data)
      } else {
        console.log(response)
      }
    }
    fetchData()

  }, [])

  return (
    <>
      <h3>Students Data</h3>
        {
          students.map((s) => {
            return(
              <>
                <div className='data-box'>
                  <div>ID: {s._id}</div>
                  <div>Name: {s.name}</div>
                  <div>Age: {s.age}</div>
                  <div>Grade: {s.grade}</div>
                  <div>Email: {s.email}</div>
                </div>
              </>
            )
          })
        }
    </>
  )
}

export default App
