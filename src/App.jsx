import axios from 'axios'
import { useState } from 'react'

function App() {
  const [trivia, setTrivia] = useState('')
  const [year, setYear] = useState('')
  const [date, setDate] = useState('')
  const [math, setMath] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const fetchTriviaFact = () => {
    axios.get('http://numbersapi.com/random/trivia/')
      .then(response => {
        setTrivia(response.data)
      })
  }

  const fetchYearFact = () => {
    axios.get('http://numbersapi.com/random/year/')
      .then(response => {
        setYear(response.data)
      })
  }

  const fetchDateFact = () => {
    axios.get('http://numbersapi.com/random/date/')
      .then(response => {
        setDate(response.data)
      })
  }

  const fetchMathFact = () => {
    axios.get('http://numbersapi.com/random/math/')
      .then(response => {
        setMath(response.data)
      })
  }

  const handleFetchFact = () => {
    if (selectedCategory === 'trivia') {
      fetchTriviaFact()
    } else if (selectedCategory === 'year') {
      fetchYearFact()
    } else if (selectedCategory === 'date') {
      fetchDateFact()
    } else if (selectedCategory === 'math') {
      fetchMathFact()
    }    
  }

  return (
    <div>
      <h1>Get a random number and fact about it</h1>
      <select id="category" onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="trivia">Trivia</option>
        <option value="year">Year</option>
        <option value="date">Date</option>
        <option value="math">Math</option>
      </select>
      <br />
      <br />
      <button onClick={handleFetchFact}>Gimme facts!</button>
      <h3>
        {selectedCategory === 'trivia' && trivia}
        {selectedCategory === 'year' && year}
        {selectedCategory === 'date' && date}
        {selectedCategory === 'math' && math}
      </h3>
    </div>
  )
}

export default App
