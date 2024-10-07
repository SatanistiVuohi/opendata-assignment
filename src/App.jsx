import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [year, setYear] = useState('')


  const fetchYearFact = () => {
    axios.get('http://numbersapi.com/random/year/')
      .then(response => {
        setYear(response.data)
      })
  }

  return (
    <div>
      <h1>Get random year and fact about it</h1>
      <button onClick={fetchYearFact}>Gimme facts!</button>
      <h3>
        {year}
      </h3>
    </div>
  )
}

export default App
