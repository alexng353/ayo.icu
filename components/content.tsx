import React from 'react';

export default function Content(props){
    return (
        <main className="mb-20 mt-10 ml-10 mr-10">
            <div className="flex justify-center">
                <div className="text-justify md:w-2xl sm:w-2xl">
                    {props.children}
                </div>
            </div>
        </main>
    )
}