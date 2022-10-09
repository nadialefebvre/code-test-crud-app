import React from "react"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Link from "@mui/material/Link"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const EndpointRequest = () => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#cbdde6",
        }}
      >
        <CardContent>
          <Typography sx={{ textAlign: "justify" }} variant="body1">
            If you see this message, it means that the temporary endpoint needed
            by this little app is now expired (each endpoint lasts 24 hrs or 100
            requests). If you{" "}
            <Link href="https://crudcrud.com">click here</Link>, you can get a
            new one. The endpoint identifier (the part following{" "}
            <q>https://crudcrud.com/api/</q>) can be easily copied and pasted
            after clicking on <q>Check Endpoint Information</q>. Change the
            value of the <q>endpointIdentifier</q> variable in the code
            (src/utils/urls.ts) to start over with a new enpoint.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default EndpointRequest
