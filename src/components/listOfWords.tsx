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
	const [words, setWords] = useState([])

	useEffect(() => {
		httpRequest('GET', `words/`)
      .then(response => {
				console.log(response.data)
        setWords(response.data)
      })
	}, [])
  

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {words.map((word: any) => {

        return (
          <ListItem
            key={word}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton dense>
              <ListItemText primary={word.original_word} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
