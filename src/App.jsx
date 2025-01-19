import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Link } from "react-router"


function App() {

  const [characters, setCharacters] = useState(null)
  const [character, setCharacter] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {

    const url = 'https://rickandmortyapi.com/api/character'

    const fetchData = async () => {

      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setCharacter(data.results[0])
      } catch (error) {
        console.log(error)
      }

    }

    fetchData()

  }, [])

  useEffect(() => {
    if (!input) {
      setCharacters(null)
    }
  }, [input])

  const fetchCharacters = async (e) => {
    e.preventDefault(0)
    const url = `https://rickandmortyapi.com/api/character?name=${input}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen bg-gray-100 p-10">

        {/* using form only for accessibility and feature of pressing 'Enter' to submit */}

        <form onSubmit={fetchCharacters} className="flex items-center mb-10 gap-5">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className=" rounded-lg text-xl pl-3 py-1"
          />

          <button type='submit' className=' bg-white py-2 px-4 rounded-lg'>
            Search
          </button>
        </form>

        {!input
          ? (
            <div className="flex items-center justify-center flex-col">
              {character && (
                <Link to={`/character/${character.id}`}>
                  <Card character={character} key={character.id} />
                </Link>
              )}
            </div>
          )
          : (
            <div className='grid grid-cols-2 gap-3'>
              {characters && characters.length > 0 && (
                characters.map(character => (
                  <Link to={`/character/${character.id}`}>
                    <Card character={character} key={character.id} />
                  </Link>
                ))

              )}
            </div>
          )
        }

      </div>
    </>
  )
}

export default App
