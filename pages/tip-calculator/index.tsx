import React from 'react'
import Wait from './wait'
import Head from 'next/head'
import TipCalculator from './tip-calculator'

export default function Index() {
    return (
        <>
        <Head>
            <title>Tip Calculator | ayo.icu</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
        <TipCalculator />
        </div>
        </>
    )
}