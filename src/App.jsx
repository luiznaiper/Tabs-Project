import { useEffect, useState } from 'react'
import BtnContainer from './BtnContainer'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

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
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* job info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}

export default App
