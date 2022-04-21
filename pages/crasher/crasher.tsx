import Bubbles from '.././components/bubblewrap'
import Head from 'next/head';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Crasher() {
    const [many, setMany] = useState(0);
    return (
        <>
        <Head>
            <title>Crasher</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <br />
        <TextField id="textfield" label="How many buttons?" type="number" onChange={(e) => {
            setMany(parseInt(e.target.value));
        }}/>
        <Bubbles many={many} toggle={true}/>

        </>
    );
}