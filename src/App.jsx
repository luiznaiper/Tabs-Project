import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'

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
    <section className="jobs-center">
      {/* button container */}
      {/* job info */}
      <JobInfo jobs={jobs} />
    </section>
  )
}

export default App
