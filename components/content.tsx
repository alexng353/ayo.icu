import React from 'react';

export default function Content(props){
    return (
        <main className="mb-20 mt-10">
            <div className="flex justify-center">
                <div className="w-3/5 text-justify">
                    {props.children}
                </div>
            </div>
        </main>
    )
}