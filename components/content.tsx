import React from 'react';

export default function Content(props){
    return (
        <main className="mb-20 mt-10">
            <div className="flex justify-center">
                <div className="text-justify max-w-2xl">
                    {props.children}
                </div>
            </div>
        </main>
    )
}