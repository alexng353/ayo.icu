import { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div
				style={{ position: "fixed", bottom: 0, width: "100%" }}
				className='bg-gray-100'
			>
				<div className='bg-gray-100 container mx-auto pt-4 pb-4 text-center'>
					© ayo icu. All rights reserved.
				</div>
			</div>
		);
	}
}

export default Footer;
