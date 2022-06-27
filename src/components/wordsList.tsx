import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import httpRequest from '../services/httpRequest'
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"


export default function WordsList() {
	const [textFilter, setTextFilter]: [any, any] = useState('')
	const [words, setWords]: [any, any] = useState([])
	const [filteredWords, setFilteredWords]: [any, any] = useState([])
  const navigate = useNavigate()

  const updateList = () => {
    httpRequest('GET', `words/`)
      .then((response: any) => {
        setWords(response.data)
        setFilteredWords(response.data.filter((word: any) => word.original_word.toLowerCase().startsWith(textFilter)))
      })
  }

	useEffect(() => {
		updateList()
	}, [])

	useEffect(() => {
    setFilteredWords(words.filter((word: any) => word.original_word.toLowerCase().startsWith(textFilter)))
	}, [textFilter])

  const deleteWord = (e: any) => {
    const id = e.currentTarget.getAttribute('data-index')
    httpRequest('DEL', `words/${id}/`)
      .then(() => {updateList()})
  }

  const getWordDetails = (e: any) => {
    const id = e.currentTarget.getAttribute('data-index')
    navigate(`/word/${id}`)
  }

  const searchTextChanged = (e: any) => {
    const text = e.target.value
    setTextFilter(text)
  }
  

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Word"
          inputProps={{ "aria-label": "search word" }}
          onChange={(e) => searchTextChanged(e)}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <List>
        {filteredWords.map((word: any) => {

          return (
            <ListItem
              key={word.id}
              secondaryAction={
                <IconButton data-index={word.id} onClick={deleteWord} edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton dense data-index={word.id} onClick={(e) => {getWordDetails(e)}}>
                <ListItemText primary={word.original_word} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
