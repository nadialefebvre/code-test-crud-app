import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import FeelingChip from "./FeelingChip"
import SingleAction from "./SingleAction"
import { actionsJSON } from "../types/types"
import { feelings } from "../utils/arrays"

interface Props {
  actions: actionsJSON
  fetchActions: () => void
  isLoading: boolean
}

const ActionsList = ({ actions, fetchActions, isLoading }: Props) => {
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>(feelings)

  const filteredActions = actions.filter((item) =>
    selectedFeelings.includes(item.feeling)
  )

  const toggleSearch = (feeling: string) => {
    if (selectedFeelings.includes(feeling)) {
      setSelectedFeelings((arr) => arr.filter((item) => item !== feeling))
    } else {
      setSelectedFeelings([...selectedFeelings, feeling])
    }
  }

  useEffect(() => fetchActions(), [fetchActions])

  return (
    <>
      {actions.length !== 0 && (
        <Grid item xs={12}>
          <Stack direction="row" spacing={4} sx={{ justifyContent: "center" }}>
            {feelings.map((item) => (
              <FeelingChip
                key={item}
                color="secondary"
                label={item}
                variant={
                  selectedFeelings.includes(item) ? "filled" : "outlined"
                }
                onClickFunction={() => toggleSearch(item)}
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
