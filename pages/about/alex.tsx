import Head from "next/head";
import Footer from "../share/footer";
import Navbar from "../share/navbar";

import Icon from "@mui/material/Icon";

import { GreenButton } from '../../components/styled-mui';

import { GitHub, Twitter, ChatBubble } from "@mui/icons-material";

function Flatypus() {
	return (
		<>
			<Head>
				<title>Alex | ayo.icu</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='mb-20 mt-10'>
				<div className='flex justify-center'>
					<div className='md:w-2/5 sm:w-3/5 mr-5 ml-5'>
						<div className='text-center'>
							<a href='https://github.com/alexng353' target='_blank' rel='noopener noreferrer'><GitHub style={{color: "white"}}/></a>
							<a href='https://twitter.com/alexng353' target='_blank' rel='noopener noreferrer' > <Twitter style={{color: "white"}}/></a>
							<a href='https://discord.gg/' target='_blank' rel='noopener noreferrer'><ChatBubble style={{color: "white"}}/></a>

							<h1 className='text-3xl text-white'>Hey, I&apos;m <a className="text-3xl text-blue-500" href="https://twitter.com/alexng353">Alex</a> </h1>
							<p className='text-gray-400'>
								student, aspiring full-stack developer, and <span className="text-blue-500">gamer</span>.
							</p>
							<br />
						</div>
						<div className='text-justify text-gray-400'>
							<p>
								I&apos;m a <span className="text-blue-500">high school</span> student in Vancouver, Canada.
								And I&apos;m a <span className="text-blue-500">gamer</span> and <span className="text-blue-500">developer</span> who loves to learn new things.
							</p>
							<div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Flatypus;