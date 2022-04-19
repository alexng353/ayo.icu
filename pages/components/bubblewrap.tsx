import { Button } from "@mui/material";
import { Component, useState } from "react";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center",
};

// class based component with no props
class Test extends Component {
	constructor(props: {}) {
		super(props);
		this.state = { showMessage: false };
	}
	state: { showMessage: boolean };

	_showMessage = (bool) => {
		this.setState({
			showMessage: bool,
		});
	};

	render() {
		return (
			<div>
				<Button
					variant='outlined'
					onClick={this._showMessage.bind(null, !this.state.showMessage)}
				>
					{" "}
					toggle{" "}
				</Button>

				{this.state.showMessage && (
					<div>
						{[...Array(100)].map((number) => {
							return <Button key={number.toString()}>{number} </Button>;
						})}
					</div>
				)}
			</div>
		);
	}
}

// functional component with props
function Test2({ many }: { many: number }) {
	let [showMessage, setShowMessage] = useState(false);

	return (
		<div>
			<Button
				variant='outlined'
				onClick={() => {
					setShowMessage(!showMessage);
				}}
			>
				{" "}
				toggle{" "}
			</Button>
			{showMessage && (
				<div>
					{[...Array(many)].map((number) => {
						return (
							<Button
								key={number.toString()}
								onClick={() => {
									new Audio("/pop2_n6kdMwA.mp3").play();
								}}
							>
								{number + 1}{" "}
							</Button>
						);
					})}
				</div>
			)}
		</div>
	);
}

//functional component using for and push
function BubbleWrap({ many }: { many: number }) {
	const [showMessage, setShowMessage] = useState(false);

	return (
		<div>
			<Button
				variant='outlined'
				onClick={() => {
					setShowMessage(!showMessage);
				}}
			>
				{" "}
				toggle{" "}
			</Button>
			{showMessage ? (
				<div>
					{Array(Math.abs(many - 1))
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
			) : null}
		</div>
	);
}

export default BubbleWrap;
