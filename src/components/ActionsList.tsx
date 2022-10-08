import React, { useEffect, useState } from "react"

import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import SingleAction from "./SingleAction"

import { feelings } from "../utils/feelings"

import { actionsJSON } from "../types/types"

interface Props {
  actions: actionsJSON
  fetchActions: () => void
  isLoading: boolean
}

const ActionsList = ({ actions, fetchActions, isLoading }: Props) => {
  useEffect(() => fetchActions(), [fetchActions])

  const [inputSearch, setInputSearch] = useState<string[]>(feelings)

  const filteredActions = actions.filter((item) =>
    inputSearch.includes(item.feeling)
  )
  console.log("filteredActions:", filteredActions)
  const toggleSearch = (feeling: string) => {
    if (inputSearch.includes(feeling)) {
      setInputSearch((arr) => arr.filter((item) => item !== feeling))
    } else {
      setInputSearch([...inputSearch, feeling])
    }
  }

  return (
    <>
      {actions.length !== 0 && (
        <Grid item xs={12}>
          <Stack direction="row" spacing={4} sx={{ justifyContent: "center" }}>
            {feelings.map((item) => (
              <Chip
                key={item}
                label={item}
                color="secondary"
                variant={inputSearch.includes(item) ? "filled" : "outlined"}
                onClick={() => toggleSearch(item)}
              />
            ))}
          </Stack>
        </Grid>
      )}
      {isLoading ? (
        <Typography variant="body1" color="text.secondary">
          Loading...
        </Typography>
      ) : (
        filteredActions
          .map((item) => (
            <SingleAction
              key={item._id}
              fetchActions={fetchActions}
              isLoading={isLoading}
              action={item}
            />
          ))
          .reverse()
      )}
    </>
  )
}

export default ActionsList
