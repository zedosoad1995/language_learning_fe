import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card'  

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/add_word")}>
        Add Word
      </button>
      <h1>Words of the day</h1>
      <ul>
        {['joao', 'joana'].map((name) =>
          <Card
            border='primary'
            key='primary'
            style={{ width: '18rem' }}
            className='mb-2'
            onClick={() => alert(`Hello from here: ${name}`)}
          >
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {name} translation.
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </ul>
    </>
  );
}

export default Home;