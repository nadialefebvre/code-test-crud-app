import React, { useCallback, useState } from "react"
import Grid from "@mui/material/Grid"

import { API_ENDPOINT } from "../utils/urls"
import NewActionForm from "../components/NewActionForm"
import Header from "../components/Header"
import EndpointRequest from "../components/EndpointRequest"
import Footer from "../components/Footer"

const Start = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [actions, setActions] = useState([])
  const [isEndpointExpired, setIsEndpointExpired] = useState(false)

  // ----- FETCH ITEMS -----
  const fetchActions = useCallback(() => {
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
        setIsLoading(false)
        setIsEndpointExpired(false)
      })
      .catch((err) => {
        console.error("Error in App: ", err)
        setIsLoading(false)
        setIsEndpointExpired(true)
      })
  }, [])
  // ---------------
  console.log(actions)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
      <Header />
      {isEndpointExpired ? (
        <EndpointRequest />
      ) : (
        <NewActionForm fetchActions={fetchActions} />
      )}
      <Footer />
    </Grid>
  )
}

export default Start
