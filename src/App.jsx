import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Box from './Components/Box'

function App() {

  const [Card, setCard] = useState([])
  const [show, setshow] = useState({ id: "", body: "" })
  const [i, incre] = useState(-1)

  async function data() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await response.json();
    setCard(result)
  }

  useEffect(() => {
    data()
  }, []);

  function update() {
    const X = i >= Card.length - 1 ? 0 : i + 1
    incre(X)
    setshow(Card[X])
  }

  return (
    <>
      <Navbar />
      <br />
      <Box ID={show.id} Content={show.body} />
      <br />
      <button onClick={update} className='px-5 py-2 text-2xl rounded-md bg-blue-600 text-white cursor-pointer'>
        Next
      </button>
    </>
  )
}

export default App