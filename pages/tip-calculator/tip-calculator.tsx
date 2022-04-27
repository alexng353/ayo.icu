import React from "react";
import { Button, TextField, FormControl, InputLabel, Typography } from "@mui/material";
import Footer from "../share/footer";
import Navbar from "../share/navbar";

function TipCalculator() {
    const [bill, setBill] = React.useState(0);
    const [tipPercent, setTipPercent] = React.useState(15);
    const [people, setPeople] = React.useState(1);
    const [tipPerPerson, setTipPerPerson] = React.useState(0);
    const [totalPerPerson, setTotalPerPerson] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    function calculateTip() {
        const dollarAmtTip = (bill * (tipPercent / 100));
        const tmpTotal = bill + dollarAmtTip;
        
        setTotal(tmpTotal);
        setTipPerPerson(Math.round((dollarAmtTip / people) * 100) / 100);
        setTotalPerPerson((tmpTotal / people));
    }

    return(
        <>
        <Navbar />
        <main className="mb-20 mt-10">
            <div className="flex justify-center">
                <div className="w-3/5 text-justify">
                    <Typography variant="h4" >Tip Calculator</Typography>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <FormControl>
                            <TextField
                                id="bill"
                                label="Bill"
                                type="number"
                                required={true}
                                onChange={(e) => {
                                    setBill(parseFloat(e.target.value));
                                }}
                            />
                            <TextField
                                id="tip"
                                label="Tip"
                                type="number"
                                defaultValue={tipPercent}
                                helperText="% of bill to tip | default: 15%"

                                onChange={(e) => {
                                    setTipPercent(parseInt(e.target.value));
                                }}
                            />
                            <TextField
                                id="people"
                                label="People"
                                type="number"
                                defaultValue={people}
                                helperText="Number of people | default: 1"
                                onChange={(e) => {
                                    setPeople(parseInt(e.target.value));
                                }}
                            />


                            <Button
                                variant="outlined"
                                onClick={() => {
                                    calculateTip();
                                }}
                            >
                                Calculate
                            </Button>
                        </FormControl>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div >
                                <p>Bill</p>
                                <p>Tip Percentage</p>
                                <p>People</p>
                                <p>Tip Per Person</p>
                                <p>Total Per Person</p>
                                <p>Total</p>
                            </div>
                            <div>
                                <p>${bill}</p>
                                <p>{tipPercent}%</p>
                                <p>{people}</p>
                                <p>${tipPerPerson}</p>
                                <p>${totalPerPerson}</p>
                                <p>${total}</p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">

                        <p>Also Check Out</p>
                        <Button
                            variant="outlined"
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                            <p>Purchase Tax Calculator</p>
                        </Button>

                    </div> 
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default TipCalculator;