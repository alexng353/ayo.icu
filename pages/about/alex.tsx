import Head from "next/head";
import Footer from "../share/footer";
import Navbar from "../share/navbar";

export default function Flatypus() {
	return (
		<>
			<Head>
				<title>Alex | ayo.icu</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className='mb-20 mt-10'>
				<div className='flex justify-center'>
					<div className='w-3/5 text-justify'>
						<h1 className='text-3xl'>Alex</h1>
						<p>
							This is a simple{" "}
							<a
								href='https://nextjs.org/docs'
								className='underline text-blue-600 hover:no-underline'
							>
								Next.js
							</a>{" "}
							project that uses the{" "}
							<a
								className='underline text-blue-600 hover:no-underline'
								href='
                                https://material-ui.com/'
							>
								Material-UI
							</a>{" "}
							library.
						</p>
						<p>
							I use this project to learn more about Next.js and javascript.
						</p>
						<p>I also use it to host my personal projects</p>
						<br />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
