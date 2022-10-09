import React, { useState } from "react"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import Chip from "@mui/material/Chip"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

import { API_ENDPOINT } from "../utils/urls"

import { feelings } from "../utils/arrays"

interface Props {
  fetchActions: () => void
}

const NewActionForm = ({ fetchActions }: Props) => {
  const [inputText, setInputText] = useState("")
  const [inputFeeling, setInputFeeling] = useState("")

  // ----- ADD ITEM -----
  const addAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputText === "") {
      alert("Text is required")
    } else if (inputFeeling === "") {
      alert("Feeling is required")
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          feeling: inputFeeling,
          timestamp: new Date(),
        }),
      }

      fetch(API_ENDPOINT("actions"), options)
        .then((res) => res.json())
        .then(() => {
          fetchActions()
          setInputText("")
          setInputFeeling("")
        })
        .catch((err) => console.error("Error in NewActionForm(addAction):", err))
    }
  }
  // ---------------

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#cbdde6",
        }}
      >
        <Box component="form" onSubmit={addAction} noValidate>
          <CardContent sx={{ position: "relative" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1.5, justifyContent: "flex-end" }}
            >
              {feelings.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  color="secondary"
                  variant={item === inputFeeling ? "filled" : "outlined"}
                  onClick={() => setInputFeeling(item)}
                />
              ))}
            </Stack>

            <TextField
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#eef4f7",
                  "&:hover": { backgroundColor: "#fff" }
                },
              }}
              id="filled-basic"
              label="Type here"
              variant="filled"
              required
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputText(e.target.value)
              }
              value={inputText}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <IconButton sx={{ "&:hover": { color: "#385f73" } }} type="submit">
              <AddIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  )
}

export default NewActionForm
