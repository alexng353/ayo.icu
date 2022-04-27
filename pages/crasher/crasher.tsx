import Bubbles from '../../components/bubblewrap'
import Head from 'next/head';
import { TextField, Button } from '@mui/material';
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
        <Button variant="outlined" onClick={() => {
            window.location.href = "/";
        }}>
            {" "}
            Go Home!{" "}
        </Button>

        <Bubbles many={many} toggle={true}/>

        </>
    );
}