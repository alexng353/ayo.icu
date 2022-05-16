// import { Button } from "@mui/material";
import Head from "next/head";
import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import { useRouter } from "next/router";

import { GreenButton } from '../../components/styled-mui';
import Content from "../../components/content";
import Link from "next/link";

import InlineHref from '../../components/InlineHref';


function About() {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>About</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Content>
				<h1 className='text-3xl text-white'>About</h1>
				<p>
					This is a simple{" "}
					<a
						href='https://nextjs.org/docs'
						className='underline text-blue-500 hover:no-underline'
					>
						Next.js
					</a>{" "}
					project that uses the{" "}
					<a
						className='underline text-blue-500 hover:no-underline'
						href='https://material-ui.com/'
					>
						Material-UI
					</a>{" "}
					library.
				</p>
				<p>
					This project is a work in progress. I am working on adding more
					features and improving the codebase.
				</p>
				<br />
				<p>
					If you have any questions or comments, please feel free to contact
					us never.
				</p>
				<br />
				<p>
					{" "}
					More about the creators of this project can be found at &darr;
				</p>
				<div className='flex justify-center'>
					<InlineHref link='/about/flatypus'>
						<GreenButton>
							flatypus
						</GreenButton>
					</InlineHref>
					&nbsp;
					<InlineHref link='/about/alex'>
						<GreenButton>
							alex
						</GreenButton>
					</InlineHref>
				</div>
			</Content>
			<Footer />
		</div>
	);
}

export default About;
