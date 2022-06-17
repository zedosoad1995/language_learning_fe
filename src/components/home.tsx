import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DailyUnseenWord from "./dailyUnseenWord";
import WordsOfTheDay from "./wordsOfTheDay";
import { axiosInstance } from "../axios";


function Home() {
  const navigate = useNavigate();
  const [words, setWords] = useState([])
  const [isDailyWordsSeen, setIsDailyWordsSeen] = useState(true)

  const updateData = () => {
    return axiosInstance.post(`words/update/`, {
      'timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
    })
  }

  const fetchData = () => {
    axiosInstance.get(`words/`)
      .then(response => {
        setWords(response.data)
        return response.data
      })
      .then((response: Array<any>) => {
        setIsDailyWordsSeen(response.every(word => word.is_seen))
      })
  }

  useEffect(() => {
    updateData()
      .then(fetchData)
  }, [])

  const onUpdateDailyUnseenWords = () => {
    fetchData()
  }

  return (
    <>
      <button onClick={() => navigate("/add_word")}>
        Add Word
      </button>
      { isDailyWordsSeen ? 
      <WordsOfTheDay words={words}/> 
      : <DailyUnseenWord words={words} onUpdateWords={onUpdateDailyUnseenWords}/>}
    </>
  );
}

export default Home;