import { Button } from '@mui/material'
import React from 'react';
import Lipsum from './lipsum.json'

function LoremIpsum() {
    let [showMessage, setShowMessage] = React.useState(false);
    return (
        <div>
            <Button variant='outlined' onClick={() => {setShowMessage(!showMessage)}}> toggle </Button>
            { showMessage && (
            <div>{Lipsum.lipsum.map((item, index) => {return <div key={index}><p key={index}>{item}</p> <br/> </div>})}</div>) }
        </div>
    )
}

export default LoremIpsum