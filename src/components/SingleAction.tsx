import React, { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

import FeelingChip from "./FeelingChip"
import { API_ENDPOINT } from "../utils/urls"
import { IRootObject } from "../types/types"
import { feelings } from "../utils/arrays"

interface Props {
  action: IRootObject
  fetchActions: () => void
  isLoading: boolean
}

const SingleAction = ({ action, isLoading, fetchActions }: Props) => {
  const [isEditable, setIsEditable] = useState(false)
  const [text, setText] = useState(action.text)
  const [feeling, setFeeling] = useState(action.feeling)

  const formattedTimestamp = formatDistanceToNow(new Date(action.timestamp), {
    addSuffix: true,
  })

  const deleteAction = (actionId: string) => {
    const options = {
      method: "DELETE",
    }

    fetch(API_ENDPOINT(`actions/${actionId}`), options)
      .then(() => fetchActions())
      .catch((err) => console.error("Error in SingleAction(Delete):", err))
  }

  const confirmActionUpdate = (actionId: string) => {
    if (text === "") {
      alert("Text is required")
    } else {
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
        .then(() => fetchActions())
        .catch((err) => console.error("Error in SingleAction(Update):", err))

      setIsEditable(false)
    }
  }

  const changeText = (e: React.FocusEvent<HTMLSpanElement, Element>) => {
    setText(e.currentTarget.textContent)
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
                      <FeelingChip
                        key={item}
                        color="secondary"
                        label={item}
                        size="small"
                        variant={item === feeling ? "filled" : "outlined"}
                        onClickFunction={() => setFeeling(item)}
                      />
                    ))}
                  </>
                ) : (
                  <FeelingChip
                    color="primary"
                    label={action.feeling}
                    size="small"
                    variant="filled"
                  />
                )}
              </Stack>
            </Stack>

            <Typography
              sx={[
                { fontSize: 20, overflowWrap: "break-word" },
                isEditable && {
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                  backgroundColor: "#eef4f7",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                  "&:hover": { backgroundColor: "#eef4f7" },
                },
              ]}
              variant="body1"
              color="#385f73"
              contentEditable={isEditable}
              suppressContentEditableWarning={true}
              onBlur={(e: React.FocusEvent<HTMLSpanElement, Element>) =>
                changeText(e)
              }
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
