import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { Component } from "react";
import Menu from "./menuList";
import styles from "../../styles/bar.module.css";

// classical component is deprecated
// use functional component instead
class DeprecatedNavbar extends Component {
	render() {
		return (
			<header>
				<AppBar position='static' className='bg-gray-900'>
					<div className='flex justify-center'>
						<div className='w-3/5 text-justify'>
							<Toolbar>
								<Typography variant='h6' color='inherit' className='mr-auto'>
									<a
										href='https://ayo.icu'
										className='underline hover:no-underline'
									>
										Ayo ICU
									</a>
								</Typography>
								<div className='underline text-white hover:no-underline'>
									<Link href='/about'>About</Link>
								</div>
								{/* <a href="/about" className="underline text-white hover:no-underline">About</a> */}
								&nbsp; &nbsp;
								<Demo />
							</Toolbar>
						</div>
					</div>
				</AppBar>
			</header>
		);
	}
}
// rewrite navbar as function
function Navbar() {
	return (
		<header>
			<AppBar position='static' className={styles.navbar}>
				<div className='flex justify-center'>
					<div className='w-3/5 text-justify'>
						<Toolbar>
							<Typography variant='h6' color='inherit' className='mr-auto'>
								<a
									href='https://ayo.icu'
									className='underline hover:no-underline'
								>
									353
								</a>
							</Typography>
							<div className='underline hover:no-underline'>
								<Link href='/about'>About</Link>
							</div>
							&nbsp; &nbsp;
							<Menu />
						</Toolbar>
					</div>
				</div>
			</AppBar>
		</header>
	);
}

export default Navbar;
