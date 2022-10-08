import React, { useState } from "react"
import { formatDistanceToNow } from "date-fns"

import { API_ENDPOINT } from "../utils/urls"
import { IRootObject } from "../types/types"

import { feelings } from "../utils/feelings"

import Grid from "@mui/material/Grid"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
// import TextField from "@mui/material/TextField"

interface Props {
  action: IRootObject
  fetchActions: () => void
  isLoading: boolean
}

const SingleAction = ({ action, isLoading, fetchActions }: Props) => {
  const [isEditable, setIsEditable] = useState(false)
  const [text, setText] = useState(action.text)
  const [feeling, setFeeling] = useState(action.feeling)

  // ----- DELETE ITEM -----
  const deleteAction = (actionId: any) => {
    const options = {
      method: "DELETE",
    }

    fetch(API_ENDPOINT(`actions/${actionId}`), options)
      // .then(res => res.json())
      .then(() => fetchActions())
      .catch((err) => console.error("Error in SingleAction(Delete):", err))
  }
  // ---------------

  // ----- CONFIRM ITEM UPDATE -----
  const confirmActionUpdate = (actionId: any) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        feeling,
        timestamp: action.timestamp,
      }),
    }

    fetch(API_ENDPOINT(`actions/${actionId}`), options)
      // .then(res => res.json())
      .then(() => fetchActions())
      .catch((err) => console.error("Error in SingleAction(Update):", err))

    setIsEditable(false)
  }
  // ---------------

  const changingText = (e: any) => {
    setText(e.currentTarget.textContent)
  }

  // const changingFeeling = (e: any) => {
  //   setFeeling(e.currentTarget.textContent)
  // }

  const formattedTimestamp = formatDistanceToNow(new Date(action.timestamp), {
    addSuffix: true,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Grid item xs={12} sm={12} md={6}>
      {action && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{ position: "relative" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 1.5, justifyContent: "space-between" }}
            >
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                {!isEditable && formattedTimestamp}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "flex-end" }}
              >
                {isEditable ? (
                  <>
                    {feelings.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        color="secondary"
                        variant={item === feeling ? "filled" : "outlined"}
                        onClick={() => setFeeling(item)}
                      />
                    ))}
                  </>
                ) : (
                  <Chip
                    label={action.feeling}
                    size="small"
                    color="secondary"
                    variant="filled"
                  />
                )}
              </Stack>
            </Stack>

            {/*
            {isEditable ? (
              <TextField
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#eef4f7",
                  },
                }}
                id="filled-basic"
                // label="What have I done?"
                variant="filled"
                fullWidth
                multiline
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setText(e.target.value)
                }
                value={text}
              />
            ) : (
              <Typography
                sx={[
                  { fontSize: 20 },
                  isEditable && { backgroundColor: "lightgoldenrodyellow" },
                ]}
                variant="body1"
                // color="text.secondary"
                contentEditable={isEditable}
                onBlur={(e: any) => changingText(e)}
              >
                {action.text}
              </Typography>
            )}
              */}

            <Typography
              sx={[
                { fontSize: 20 },
                isEditable && {
                  backgroundColor: "#eef4f7",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                  "&:hover": { backgroundColor: "#eef4f7" },
                },
              ]}
              variant="body1"
              color="#385f73"
              contentEditable={isEditable}
              onBlur={(e: any) => changingText(e)}
            >
              {action.text}
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: "space-between" }}>
            {isEditable ? (
              <IconButton
                onClick={() => confirmActionUpdate(action._id)}
                sx={{ "&:hover": { color: "#385f73" } }}
              >
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => setIsEditable(true)}
                sx={{ "&:hover": { color: "#385f73" } }}
              >
                <EditIcon />
              </IconButton>
            )}
            <IconButton
              onClick={() => deleteAction(action._id)}
              sx={{ "&:hover": { color: "#d1434c" } }}
            >
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Grid>
  )
}

export default SingleAction
