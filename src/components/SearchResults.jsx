import {useEffect, useState} from 'react'

function SearchResults() {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchResults()
    }, [])

    const fetchResults = async () => {
        const response = await fetch(`${process.env.REACT_APP_TMDB_URL}=${process.env.REACT_APP_TMDB_TOKEN}`)

        const data = await response.json()

        setResults(data.results)
        setLoading(false)
    }

  return (
    <div>
        {results.map((results) => (
            <ul key={results.id}>
            <li>{results.original_title}</li>
            </ul>
        ))}
    </div>
  )
}
export default SearchResults