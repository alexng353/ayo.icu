import {Button} from '@mui/material'
import Head from 'next/head'

function input(){
    // what does this even do?
    function getchange(event){
        var n = event.target.value
        console.log(factorial(n))
        return factorial(n)
    }
    function factorial(n){
        if(isNaN(n)){
            if (n === 0) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }else{
            return "Please enter a number"
        }
    }
    return (
        <Head>
            <title>Factorial</title>
            <input type="text" onChange={getchange}/>
        </Head>
    );
}

export default input;
