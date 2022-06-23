import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useEffect, useState } from "react";
import httpRequest from '../services/httpRequest';


export default function WordsList() {
	const [words, setWords]: [any, any] = useState([])

  const updateList = () => {
    httpRequest('GET', `words/`)
      .then((response: any) => {
        setWords(response.data)
      })
  }

	useEffect(() => {
		updateList()
	}, [])

  const deleteWord = (e: any) => {
    const id = e.currentTarget.getAttribute('data-index')
    httpRequest('DEL', `words/${id}/`)
      .then(() => {updateList()})
  }
  

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {words.map((word: any) => {

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
            <ListItemButton dense href={`/word/${word.id}`}>
              <ListItemText primary={word.original_word} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
