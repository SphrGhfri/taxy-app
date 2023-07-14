// app/page.js - no directives needed
import Login from "@/components/Login";
import TestAuth from "@/components/TestAuth";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { cookies } from "next/dist/client/components/headers";

const user_me = async (): Promise<any> => {
  try {
    console.log({cookies:cookies().getAll()})
    const res = await axios.get('https://dev-api.modelic.ai/user/me', { withCredentials: true })
    return res.data
  } catch (e) {
    console.log(e)
    return e
  }
}

export default async function Home() {
  const result = await user_me()
  console.log({ result })

  return (
    <Container maxWidth="sm" >
      <Grid container spacing={2}>
        <Typography variant="h1">Home</Typography>
        <TestAuth />
        <div>
          {JSON.stringify(result)}
        </div>
        <Login />
      </Grid>
    </Container>
  );
}