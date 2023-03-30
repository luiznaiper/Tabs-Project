import { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setJobs(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  )
}

export default App
