import React from 'react';

export default function Content(props){
    return (
        <main className="mb-20 mt-10 ml-5 mr-5">
            <div className="flex justify-center">
                <div className="text-left md:w-2xl sm:w-2xl">
                    {props.children}
                </div>
            </div>
        </main>
    )
}