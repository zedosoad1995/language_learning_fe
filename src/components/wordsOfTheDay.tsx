import Card from 'react-bootstrap/Card'  


function WordsOfTheDay({words}: {words: Array<any>}) {
	return (
    <>
      <h1>Words of the day</h1>
      <ul>
        {words.map((word, counter) =>
          <Card
            border='primary'
            key={counter}
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

export default WordsOfTheDay;
