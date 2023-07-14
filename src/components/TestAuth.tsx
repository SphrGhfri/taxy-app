'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'

const TestAuth = async () => {
    const session = useSession();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('https://dev-api.modelic.ai/user/me', { withCredentials: true })

            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <div>{JSON.stringify(session)}</div>
    )
}

export default TestAuth