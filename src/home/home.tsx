import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card'  
import { useEffect, useState } from "react";
import axios from 'axios';
import settings from '../settings.json'
const backend_api = settings['backend_api']

function Home() {
  const navigate = useNavigate();

  const [words, setWords] = useState([])

  const fetchData = () => {
    axios.get(`${backend_api}/words/`)
      .then(response => {
        setWords(response.data.results)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <button onClick={() => navigate("/add_word")}>
        Add Word
      </button>
      <h1>Words of the day</h1>
      <ul>
        {words.map((word) =>
          <Card
            border='primary'
            key='primary'
            style={{ width: '18rem' }}
            className='mb-2'
            onClick={() => alert(`Hello from here: ${word['original_word']}`)}
          >
            <Card.Body>
              <Card.Title>{word['original_word']}</Card.Title>
              <Card.Text>
                {word['translated_word']}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </ul>
    </>
  );
}

export default Home;