import { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div
				style={{ position: "fixed", bottom: 0, width: "100%" }}
				className='bg-gray-900'
			>
				<div className='bg-gray-900 container mx-auto pt-4 pb-4 text-center text-gray-400'>
					© ayo icu. All rights reserved.
				</div>
			</div>
		);
	}
}

export default Footer;
