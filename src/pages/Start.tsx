import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"

import { API_ENDPOINT } from "../utils/urls"

const Start = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [actions, setActions] = useState([])

  // ----- FETCH ITEMS -----
  useEffect(() => {
    setIsLoading(true)

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }

    fetch(API_ENDPOINT("actions"), options)
      .then((res) => res.json())
      .then((data) => {
        setActions(data)
        console.log(actions)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error in App: ", err)
        setIsLoading(false)
      })
  }, [])
  // ---------------

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
      <div>Test</div>
    </Grid>
  )
}

export default Start
