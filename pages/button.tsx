import Head from "next/head";
import { ChangeEvent } from "react";

function input() {
	// what does this even do?
	function getchange(event: ChangeEvent<HTMLInputElement>) {
		const n = parseFloat(event.target.value);
		return factorial(n);
	}
	function factorial(n: number): number {
		if (n === 0) {
			return 1;
		}
		return n * factorial(n - 1);
	}
	return (
		<Head>
			<title>Factorial</title>
			<input type='text' onChange={getchange} />
		</Head>
	);
}

export default input;
