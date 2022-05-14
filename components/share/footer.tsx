import { Component } from "react";
import styles from "../../styles/bar.module.css";


class Footer extends Component {
	render() {
		return (
			<div
				style={{ position: "fixed", bottom: 0, width: "100%" }}
				className={styles.footer}
			>
				<div className='container mx-auto pt-4 pb-4 text-center'>
					© ayo icu. All rights reserved.
				</div>
			</div>
		);
	}
}

export default Footer;
