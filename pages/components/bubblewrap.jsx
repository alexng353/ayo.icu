import React from 'react';
import { render } from 'react-dom';
import { Button } from '@mui/material';

const styles = {
fontFamily: 'sans-serif',
textAlign: 'center',
};

// class based component with no props
class Test extends React.Component {

    constructor() {
        super(); 
        this.state = { showMessage: false }
    }

    _showMessage = (bool) => {
        this.setState({
        showMessage: bool
        });
    }

    render() {
        return (
        <div>
            <Button variant='outlined' onClick={this._showMessage.bind(null, !this.state.showMessage)}> toggle </Button>

            { this.state.showMessage && (<div>{[...Array(100).keys()].map((number) => {return <Button key={number.toString()}>{number} </Button>})}</div>) }
        </div>
        )
    }
}


// functional component with props
function Test2(props) {
    let [showMessage, setShowMessage] = React.useState(false);

    return (
        <div>
            <Button variant='outlined' onClick={() => {
                setShowMessage(!showMessage)
            }}> toggle </Button>
            { showMessage && (<div>{[...Array(props.many).keys()].map((number) => {return <Button key={number.toString()} onClick={
                () => {
                new Audio('/pop2_n6kdMwA.mp3').play()
                }
                }>{number+1} </Button>})}</div>) }
        </div>
    )
}

//functional component using for and push
function BubbleWrap(props) {
    let [showMessage, setShowMessage] = React.useState(false);
    var newlist = [];
    for (var i = 1; i < props.many; i++) {
    newlist.push(i);
    }
    return (
        <div>
            <Button variant='outlined' onClick={() => {setShowMessage(!showMessage)}}> toggle </Button>
            { showMessage && (<div>{newlist.map((number) => {return <Button key={number.toString()} onClick={
                () => {
                new Audio('/pop2_n6kdMwA.mp3').play()
                }
                }>{number} </Button>})}</div>) }
        </div>
    )
}



export default (BubbleWrap);