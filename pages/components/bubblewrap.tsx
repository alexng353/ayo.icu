import { Button } from "@mui/material";
import { Component, useState } from "react";

// interface is a thing that describes the shape of a function in typescript

interface BubbleWrapProps {
	many: number;
	toggle: boolean;
	text: string;
}

//functional component using for and push
// can receive many, toggle and text
// many is the number of buttons to generate
// toggle is whether or not it can be hidden by a user
// text is what the toggle shows
function BubbleWrap({ many, toggle=false, text="toggle" }: BubbleWrapProps) {
	const [showMessage, setShowMessage] = useState(false);

	function generator ()  {
		return (
			<div>
				{Array(many)
					.fill(1)
					.map((_, number) => {
						return (
							<Button
								key={number}
								onClick={() => {
									const music = new Audio("/pop2_n6kdMwA.mp3");
									music.volume = 0.1;
									music.play();
								}}
							>
								{number + 1}{" "}
							</Button>
						);
					})}
			</div>
		);
	}

	if (toggle) {
		return (
			<div>
				<Button
					variant='outlined'
					onClick={() => {
						setShowMessage(!showMessage);
					}}
				>
					{text}
				</Button>
				{showMessage && generator()}
			</div>
			);
	} else {
		return (
			<div>
				{generator()}
			</div>
		);
	}
}

export default BubbleWrap;
