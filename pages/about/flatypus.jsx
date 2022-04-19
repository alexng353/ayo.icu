import React from "react";
import Head from "next/head";
import Navbar from "../share/navbar";
import Footer from "../share/footer";

export default function Flatypus() {
    return (
        <>
            <Head>
                <title>Flatypus | ayo.icu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="mb-20 mt-10">
                <div className="flex justify-center">
                    <div className="w-3/5 text-justify">

                        <h1 className="text-3xl">Flatypus</h1>
                        <p>
                            This is a simple <a href="https://nextjs.org/docs" className="underline text-blue-600 hover:no-underline">Next.js</a> project that uses the{" "}
                            <a
                                className="underline text-blue-600 hover:no-underline"
                                href="
                                https://material-ui.com/">Material-UI</a>{" "}
                            library.
                        </p>
                        <p>
                            This project is a work in progress. I am working on adding more
                            features and improving the codebase.
                        </p>
                        <br />
                        <p>
                            If you have any questions or comments, please feel free to
                            contact me never
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}