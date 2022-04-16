import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@mui/material'
import Lipsum from './lipsum.json'
import Footer from './components/footer'
import Navbar from './components/navbar'


function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className='mb-12 mt-10'>
				<div className='flex justify-center'>
					<div className='w-3/5 text-justify'>
						{Lipsum.lipsum.map((item, index) => {
							return <div key={index}><p key={index}>{item}</p> <br/> </div>
						})}
						<Button variant='outlined' onClick={() => {console.log("hello world!")}}> Hello World </Button>
						
					</div>
					
				</div>
				<Footer />
			</main>
		</div>
		
		)
}

export default Home