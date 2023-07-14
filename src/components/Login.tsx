'use client';
import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (<button onClick={() => signIn()}>Sign in</button>
  )
}

export default Login